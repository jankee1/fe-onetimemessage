import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, fromEvent } from 'rxjs';
import { ApiService } from '../../api.service';
import { MAX_MESSAGE_LENGTH, MIN_MESSAGE_LENGTH } from '../../config';
import { City, CityView, Message } from '../../model';
import { AbstractCreationMessageComponent } from '../abstract-creation-message.component';
import { CityMapperService, addDaysToDate } from '../../helper';

@Component({
  selector: 'create-message',
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.css'
})
export class CreateMessageComponent extends AbstractCreationMessageComponent implements AfterViewInit {

  private cityMapper: CityMapperService
  private allCities: City[] = [];
  cityViews: CityView[] = []
  isMeetingPlaceFieldClicked = false;

  @ViewChild('meetingPlace') meetingPlace: ElementRef;
  optionalFieldsVisible = true;

  messageForm: FormGroup = new FormGroup({
    meetingDate: new FormControl<Date>(null),
    meetingPlace: new FormControl<string>(''),
    messageBody: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_MESSAGE_LENGTH), Validators.maxLength(MAX_MESSAGE_LENGTH)]),
    emailRecipient: new FormControl<string>('', [Validators.email]),
  });

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {
    super(apiService);
    this.cityMapper = new CityMapperService();
  }

  get regularOrRedStyling(): string {
    return this.notAllowedEditMeetingPlaceField ? 'form-control bg-dark text-light opacity' : 'red-box-shadow form-control bg-dark text-light opacity'
  }

  get regularOrGreenStyling(): string {
    return this.notAllowedEditMeetingPlaceField ? 'form-control bg-dark text-light opacity' : 'green-box-shadow form-control bg-dark text-light opacity'
  }

  get isMeetingDateSet(): boolean {
    return !!(this.messageForm?.get('meetingDate')?.value)
  }

  get notAllowedEditMeetingPlaceField() {
    return !(!this.isMeetingDateSet && this.isMeetingPlaceFieldClicked);
  }

  get today(): string {
    return addDaysToDate(new Date(), 0);
  }

  get fiveDaysFromNow(): string {
    return addDaysToDate(new Date(), 5);
  }
  
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    fromEvent(this.meetingPlace.nativeElement, 'keyup').pipe(
      debounceTime(800)
    ).subscribe(() => {
      const cityName = this.messageForm.get('meetingPlace')?.value as string;
      const selectedDate = this.messageForm?.get('meetingDate')?.value as Date;
      if(cityName?.length) {
        this.apiService.getCity(cityName).subscribe(response => {
          console.log('response', response)
          this.allCities = response;
          this.cityViews = this.allCities.map(city => this.cityMapper.modelToView(city, selectedDate));
        });
      } else {
        this.cityViews = [];
      }
    })
  }

  onSubmit(): void {
    this.showStatus = true;
    const message = new Message(this.messageForm.get('messageBody').value);
    message.emailRecipient = this.messageForm.get('emailRecipient')?.value;
    message.meetingDate = this.messageForm.get('meetingDate')?.value;
    message.meetingPlace = this.messageForm.get('meetingPlace')?.value;
    message.order = 1;
    this.sendMessages([message]);
    this.clearForm();
  }

  clearForm(): void {
    this.messageForm.get('messageBody')?.setValue('');
    this.messageForm.get('emailRecipient')?.setValue('');
    this.messageForm.get('meetingDate')?.setValue(null);
    this.messageForm.get('meetingPlace')?.setValue('');
    this.cityViews = [];
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

  setIsMeetingPlaceFieldClicked(value: boolean): void {
    this.isMeetingPlaceFieldClicked = value;
  }
}
