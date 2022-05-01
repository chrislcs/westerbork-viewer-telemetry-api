import { Page } from './page.entity';
import { BaseSessionUpdateSubscriber } from '../shared/subscribers/base-session-update.subscriber';

export class PageSubscriber extends BaseSessionUpdateSubscriber<Page> {
  listenTo(): typeof Page {
    return Page;
  }
}
