import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { DatabaseModule } from '@app/common/database';

@Module({
  imports: [DatabaseModule],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
