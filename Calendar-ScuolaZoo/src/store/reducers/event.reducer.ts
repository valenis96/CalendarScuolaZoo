import * as EventAction from '../actions/event.actions';
import { EventItem } from '../models/eventItem.model';

const initialState: EventItem[] = [];

export function eventReducer(
  state = initialState,
  action: EventAction.EventAction
) {
  switch (action.type) {
    case EventAction.ADD_EVENT:
      return [...state, action.payload];
    default:
     return  [...state]
  }
}