import {
  Connection,
  EntityManager,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';

import { Session } from '../../sessions/session.entity';

@EventSubscriber()
export class BaseSessionUpdateSubscriber<T extends { sessionId: string }>
  implements EntitySubscriberInterface<T>
{
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  async afterInsert(event: InsertEvent<T>): Promise<void> {
    if (event.entity && event.entity.sessionId) {
      await this.updateSessionUpdatedAt(event.manager, event.entity.sessionId);
    }
  }

  async afterUpdate(event: UpdateEvent<T>): Promise<void> {
    if (event.entity && event.entity.sessionId) {
      await this.updateSessionUpdatedAt(event.manager, event.entity.sessionId);
    }
  }

  private async updateSessionUpdatedAt(
    manager: EntityManager,
    sessionId: string,
  ) {
    const session = await manager
      .getRepository(Session)
      .findOneBy({ id: sessionId });
    if (session) {
      session.updatedAt = new Date();
      await manager.save(session);
    }
  }
}
