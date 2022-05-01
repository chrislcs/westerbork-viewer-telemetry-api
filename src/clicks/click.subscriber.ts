import { Click } from './click.entity';
import { BaseSessionUpdateSubscriber } from '../shared/subscribers/base-session-update.subscriber';

export class ClickSubscriber extends BaseSessionUpdateSubscriber<Click> {
  listenTo(): typeof Click {
    return Click;
  }
}
