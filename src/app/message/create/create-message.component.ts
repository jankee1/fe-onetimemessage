import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { MIN_MESSAGE_LENGTH, MAX_MESSAGE_LENGTH } from '../../config';
import { Message } from '../../model/message';
import { AbstractCreationMessageComponent } from '../abstract-creation-message.component';


@Component({
  selector: 'create-message',
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.css'
})
export class CreateMessageComponent extends AbstractCreationMessageComponent {

  messageForm: FormGroup = new FormGroup({
    messageBody: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_MESSAGE_LENGTH), Validators.maxLength(MAX_MESSAGE_LENGTH)]),
    emailRecipient: new FormControl<string>('', [Validators.email]),
  });

  constructor(private apiService: ApiService) {
    super(apiService);
  }

  onSubmit(): void {
    const message = new Message(this.messageForm.get('messageBody').value);
    const email = this.messageForm.get('emailRecipient')?.value;
    if(email) {
      message.emailRecipient = email;
    }
    message.order = 1;
    this.sendMessages([message]);
    this.clearForm();
  }

  clearForm(): void {
    this.messageForm.get('messageBody')?.setValue('');
    this.messageForm.get('emailRecipient')?.setValue('');
  }
}
