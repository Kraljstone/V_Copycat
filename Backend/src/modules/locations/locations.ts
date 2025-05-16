import { LocationResponseDto } from './dto/location-response.dto';

export interface ILocationService {
  getLocation(): Promise<LocationResponseDto>;
}
