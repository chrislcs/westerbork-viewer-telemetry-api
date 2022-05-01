import { NotFoundException } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';

export async function createOrUpdate<T extends { id: number }>(
  repository: Repository<T>,
  entityDto: DeepPartial<T>,
): Promise<T> {
  let entity: T | null = null;
  if (entityDto.id) {
    entity = await repository.findOneBy({ id: entityDto.id } as any);
    if (entity) {
      Object.assign(entity, entityDto);
    }
  } else {
    entity = repository.create(entityDto);
  }

  if (!entity) throw new NotFoundException();

  return repository.save(entity);
}
