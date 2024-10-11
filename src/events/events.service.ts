import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { Events } from './constants';
import { UserLoggedEvent, UserRegisteredEvent } from './auth.event';

@Injectable()
export class EventsService {
  constructor(private eventEmitter: EventEmitter2) {}

  notificationUserRegistered(data: UserRegisteredEvent) {
    const userEvent = new UserRegisteredEvent();
    userEvent.id = data.id;
    userEvent.identifier = data.identifier;
    this.eventEmitter.emit(Events.USER_REGISTERED, userEvent);
  }

  notificationUserLogged(data: UserLoggedEvent) {
    const userEvent = new UserLoggedEvent();
    userEvent.id = data.id;
    userEvent.identifier = data.identifier;
    this.eventEmitter.emit(Events.USER_LOGGED, userEvent);
  }
}
