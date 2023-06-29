import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { CoreController } from './core.controller';
import { DatabaseModule } from '@app/common/database';
import { CoreRepository } from './core.repository';
import { CoreDocument, CoreSchema } from './models/core.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: CoreDocument.name, schema: CoreSchema },
    ]),
  ],
  controllers: [CoreController],
  providers: [CoreService, CoreRepository],
})
export class CoreModule {}
