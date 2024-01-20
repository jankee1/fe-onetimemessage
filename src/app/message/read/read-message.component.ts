import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Message } from '../../model/message';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'read-message',
  templateUrl: './read-message.component.html',
  styleUrl: './read-message.component.css'
})
export class ReadMessageComponent implements OnInit {

  isLoading = false;
  message: Message;

  constructor(
    private readonly apiservice: ApiService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      this.apiservice.getMessage(params['id']).subscribe( incomingMessage => {
        this.message = incomingMessage;
        this.isLoading = false;
      } )
    });
  }
}
