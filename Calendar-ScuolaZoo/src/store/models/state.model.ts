import { EventItem } from "./eventItem.model";

export interface AppState {
  readonly events: EventItem[];
}