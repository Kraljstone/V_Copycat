import { Controller, Post, Body, Inject, Logger } from '@nestjs/common';
import { RealEstateService } from './real-estate.service';
import { CreateRealEstateDto } from './dto/create-real-estate.dto';
import { Routes, Services } from 'src/utils/constants';
import { IRealEstateController } from './real-estate';
import { RealEstateCategory } from './entities/real-estate.entity';

@Controller(Routes.REAL_ESTATE.ROUTE)
export class RealEstateController implements IRealEstateController {
  private readonly logger = new Logger(RealEstateController.name);

  constructor(
    @Inject(Services.REAL_ESTATE_SERVICE)
    private readonly realEstateService: RealEstateService,
  ) {}

  @Post()
  create(@Body() createRealEstateDto: CreateRealEstateDto): Promise<RealEstateCategory> {
    this.logger.log('Creating real estate ad', createRealEstateDto);
    return this.realEstateService.create(createRealEstateDto);
  }
}
