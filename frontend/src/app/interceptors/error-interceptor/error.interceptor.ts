import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { MessageModalService } from 'src/app/utils/message-modal/message-modal.service';

@Injectable()
export class ErrorInterceptor implements ErrorHandler {

  private unknownErrorMessage = 'Erro inesperado!';

  constructor(private injector: Injector) {}

  handleError(error: any): void {
    let message: string = error.error.message || this.unknownErrorMessage;
    this.injector.get(MessageModalService).showMessage(message);
  }
}
