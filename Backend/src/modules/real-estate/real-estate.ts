import { CreateRealEstateDto } from './dto/create-real-estate.dto';
import { RealEstateCategory } from './entities/real-estate.entity';

export interface IRealEstateController {
  create(createRealEstateDto: CreateRealEstateDto): Promise<RealEstateCategory>;
}
