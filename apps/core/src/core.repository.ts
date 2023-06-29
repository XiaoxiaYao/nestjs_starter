import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { CoreDocument } from './models/core.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CoreRepository extends AbstractRepository<CoreDocument> {
  protected readonly logger = new Logger(CoreRepository.name);

  constructor(
    @InjectModel(CoreDocument.name)
    reservationModel: Model<CoreDocument>,
  ) {
    super(reservationModel);
  }
}
