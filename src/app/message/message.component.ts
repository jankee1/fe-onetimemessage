import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAX_MESSAGE_LENGTH, MIN_MESSAGE_LENGTH } from '../config';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  isLoading = false;

  messageForm: FormGroup = new FormGroup({
    messageBody: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_MESSAGE_LENGTH), Validators.maxLength(MAX_MESSAGE_LENGTH)]),
    emailRecipient: new FormControl<string>('', [Validators.email]),
  });

  constructor() {}

  onSubmit() {
    this.isLoading = true;
  }

  clearForm(): void {
    this.messageForm.get('messageBody')?.setValue('');
    this.messageForm.get('emailRecipient')?.setValue('');
  }
}
