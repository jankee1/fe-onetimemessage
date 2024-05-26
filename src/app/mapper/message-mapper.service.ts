import { Injectable } from "@angular/core";
import { MessageModel } from "../model";
import { MessageView } from "../model/message.view";

@Injectable({
    providedIn: 'root'
})
export class MessageMapperService {

    modelToView(model: MessageModel): MessageView {
        const temp = model?.meetingPlace?.weatherForecast?.[0];

        return {
            id: model.id,
            messageBody: model.messageBody,
            meetingDate: model?.meetingDate?.toLocaleString().replace('T', ' '),
            meetingCity: model?.meetingPlace?.name,
            minTemp: temp?.minTemp,
            maxTemp: temp?.maxTemp
        }
    }
}