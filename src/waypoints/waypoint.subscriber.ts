import { Waypoint } from './waypoint.entity';
import { BaseSessionUpdateSubscriber } from '../shared/subscribers/base-session-update.subscriber';

export class WaypointSubscriber extends BaseSessionUpdateSubscriber<Waypoint> {
  listenTo(): typeof Waypoint {
    return Waypoint;
  }
}
