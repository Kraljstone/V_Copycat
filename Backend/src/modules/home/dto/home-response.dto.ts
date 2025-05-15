import { ApiProperty } from '@nestjs/swagger';
import { AutomobileResponseDto } from 'src/modules/automobiles/dto/automobile-response.dto';

export class HomeResponseDto {
  @ApiProperty({
    description: 'Latest ads',
    type: AutomobileResponseDto,
  })
  latestAds: AutomobileResponseDto[];
}
