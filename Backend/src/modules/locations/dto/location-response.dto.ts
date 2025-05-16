export class CityDto {
  id: number;
  cityKey: string;
}

export class StateDto {
  id: number;
  nameKey: string;
  cities: CityDto[];
}

export class LocationResponseDto {
  states: StateDto[];
}
