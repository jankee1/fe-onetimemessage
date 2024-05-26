import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { MessageMapperService } from '../../mapper/message-mapper.service';
import { MessageView } from '../../model/message.view';

@Component({
  selector: 'read-message',
  templateUrl: './read-message.component.html',
  styleUrl: './read-message.component.css'
})
export class ReadMessageComponent implements OnInit {

  isLoading = false;
  message: MessageView;
  notSpecified = 'Not specified';

  constructor(
    private readonly apiservice: ApiService,
    private readonly route: ActivatedRoute,
    private readonly messageMapperService: MessageMapperService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      this.apiservice.getMessage(params['id']).subscribe( incomingMessage => {
        this.isLoading = false;
        this.message = this.messageMapperService.modelToView(incomingMessage);
      } )
    });
  }
}
