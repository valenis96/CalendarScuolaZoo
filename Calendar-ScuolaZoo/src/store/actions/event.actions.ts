import { Action } from '@ngrx/store';
import { EventItem } from '../models/eventItem.model';

export const ADD_EVENT = '[EVENT] Add event';

export class AddEventAction implements Action {
  readonly type = ADD_EVENT;

  constructor(public payload: EventItem) {}
}

export type EventAction = AddEventAction;