import { Component } from '@angular/core';
import { MIN_MESSAGE_LENGTH, MAX_MESSAGE_LENGTH, MIN_MESSAGE_COUNT, MAX_MESSAGE_COUNT } from '../config';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  readonly minMessageLength =  MIN_MESSAGE_LENGTH
  readonly maxMessageLength =  MAX_MESSAGE_LENGTH
  readonly minMessageCount =  MIN_MESSAGE_COUNT
  readonly maxMessageCount =  MAX_MESSAGE_COUNT


}
