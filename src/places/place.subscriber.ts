import { Place } from './place.entity';
import { BaseSessionUpdateSubscriber } from '../shared/subscribers/base-session-update.subscriber';

export class PlaceSubscriber extends BaseSessionUpdateSubscriber<Place> {
  listenTo(): typeof Place {
    return Place;
  }
}
