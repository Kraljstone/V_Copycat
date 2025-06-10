import { Injectable } from '@nestjs/common';
import { CreateRealEstateDto } from './dto/create-real-estate.dto';
import { RealEstateCategory } from './entities/real-estate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RealEstateService {
  constructor(
    @InjectRepository(RealEstateCategory)
    private realEstateCategoryRepository: Repository<RealEstateCategory>,
  ) {}

  async create(createRealEstateDto: CreateRealEstateDto): Promise<RealEstateCategory> {
    const category = new RealEstateCategory();
    category.moduleId = createRealEstateDto.subcategoryId;
    category.categoryKey = createRealEstateDto.title;
    category.catCreateDatetime = new Date();
    category.catLastUpdateDatetime = new Date();

    return this.realEstateCategoryRepository.save(category);
  }
}
