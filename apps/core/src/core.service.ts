import { Injectable } from '@nestjs/common';
import { CreateCoreDto } from './dto/create-core.dto';
import { UpdateCoreDto } from './dto/update-core.dto';
import { CoreRepository } from './core.repository';

@Injectable()
export class CoreService {
  constructor(private readonly coreRepository: CoreRepository) {}
  async create(createCoreDto: CreateCoreDto) {
    return this.coreRepository.create({
      ...createCoreDto,
      userId: '123',
      created_at: new Date(),
    });
  }

  async findAll() {
    return this.coreRepository.find({});
  }

  async findOne(_id: string) {
    return this.coreRepository.findOne({ _id });
  }

  async update(_id: string, updateCoreDto: UpdateCoreDto) {
    return this.coreRepository.findOneAndUpdate(
      { _id },
      { $set: updateCoreDto },
    );
  }

  async remove(_id: string) {
    return this.coreRepository.findOneAndDelete({ _id });
  }
}
