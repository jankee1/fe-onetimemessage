import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, catchError, combineLatest, debounceTime, distinctUntilChanged, filter, map, of, switchMap, tap } from 'rxjs';
import { ApiService } from '../../api.service';
import { MAX_MESSAGE_LENGTH, MIN_MESSAGE_LENGTH } from '../../config';
import { addDaysToDate } from '../../common';
import { CityMapperService } from '../../mapper/city-mapper.service';
import { City, CityView, MessageModel } from '../../model';
import { AbstractCreationMessageComponent } from '../abstract-creation-message.component';

@Component({
  selector: 'create-message',
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.css',
})
export class CreateMessageComponent extends AbstractCreationMessageComponent implements AfterViewInit {

  cityViews$: Observable<CityView[]>;
  moviesLoading = false;
  private cityName$ = new BehaviorSubject<string>('');
  private cityName = '';
  selectedCity: CityView = null;
  private selectedDate$ = new BehaviorSubject<Date>(null);
  private allCities: City[] = [];

  @ViewChild('meetingPlace') meetingPlace: ElementRef;
  optionalFieldsVisible = false;

  messageForm: FormGroup = new FormGroup({
    meetingDate: new FormControl<Date>(null),
    meetingPlace: new FormControl<string>(''),
    messageBody: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_MESSAGE_LENGTH), Validators.maxLength(MAX_MESSAGE_LENGTH)]),
    emailRecipient: new FormControl<string>('', [Validators.email]),
  });

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef, private readonly cityMapper: CityMapperService) {
    super(apiService);
  }

  get isMeetingDateSet(): boolean {
    return !!(this.messageForm?.get('meetingDate')?.value)
  }

  get today(): string {
    return addDaysToDate(new Date(), 0);
  }

  get fiveDaysFromNow(): string {
    return addDaysToDate(new Date(), 5);
  }
  
  ngAfterViewInit(): void {
    this.messageForm.get('meetingDate')?.valueChanges
      .subscribe(date => {
        this.selectedDate$.next(date);
      });
      
    this.cityViews$ = combineLatest([
      this.cityName$.pipe(
        filter(cityName => cityName.length >= 1),
        debounceTime(800),
        distinctUntilChanged()
      ),
      this.selectedDate$
    ]).pipe(
      tap(() => this.moviesLoading = true),
      switchMap(([cityName, selectedDate]) => {
        if (cityName !== this.cityName) {
          this.cityName = cityName;
          return this.getCitieViews(cityName, selectedDate).pipe(
            catchError(() => of([])),
            tap(() => this.moviesLoading = false)
          );
        }

        const updatedCityViews = this.allCities.map(cityView => this.cityMapper.modelToView(cityView, selectedDate));
        return of(updatedCityViews).pipe(
          tap(() => this.moviesLoading = false)
        );
      })
    );

    this.cdr.detectChanges();
  }

  onSubmit(): void {
    this.showStatus = true;
    const message = new MessageModel(this.messageForm.get('messageBody').value);
    message.emailRecipient = this.messageForm.get('emailRecipient')?.value;
    message.meetingDate = this.messageForm.get('meetingDate')?.value;
    message.meetingPlace = this.cityMapper.viewToModel(this.selectedCity);
    message.order = 1;
    this.sendMessages([message]);
    this.clearForm();
  }

  clearForm(): void {
    this.messageForm.get('messageBody')?.setValue('');
    this.messageForm.get('emailRecipient')?.setValue('');
    this.messageForm.get('meetingDate')?.setValue(null);
    this.messageForm.get('meetingPlace')?.setValue('');
    this.allCities = [];
    this.selectedCity = null;
    this.cityName = '';
    this.cityName$.next('');
  }

  toggleOptionalFields(): void {
    this.optionalFieldsVisible = !this.optionalFieldsVisible;
  }

  setMeetingPlace(event: any): void {
    const cityName = event?.target?.value as string;
    if(cityName?.length) {
      this.messageForm.get('meetingPlace')?.setValue(cityName);
    }
  }

  search($event: any): void {
    this.cityName$.next($event.filter);
  }

  getCitieViews(cityName: string, selectedDate: Date): Observable<CityView[]> {
    return this.apiService
        .getCity(cityName)
        .pipe(
          tap(cities => this.allCities = cities),
          map((cities) => cities.map(city => this.cityMapper.modelToView(city, selectedDate)))
      );
  }
}
