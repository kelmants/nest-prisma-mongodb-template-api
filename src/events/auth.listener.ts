import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { UserRegisteredEvent, UserLoggedEvent } from './auth.event';
import { Events } from './constants';

@Injectable()
export class AuthEventsListener {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  @OnEvent(Events.USER_REGISTERED)
  handleRegisteredEvent(event: UserRegisteredEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  @OnEvent(Events.USER_LOGGED)
  handleLoggedEvent(event: UserLoggedEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }
}
