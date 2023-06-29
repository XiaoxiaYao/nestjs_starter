import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class CoreDocument extends AbstractDocument {
  @Prop()
  userId: string;

  @Prop()
  created_at: Date;
}

export const CoreSchema = SchemaFactory.createForClass(CoreDocument);
