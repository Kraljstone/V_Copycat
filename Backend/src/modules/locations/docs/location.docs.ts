import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SwaggerTags } from 'src/utils/constants';
import { CityResponseDto } from '../dto/location-response.dto';

export const ApiLocationDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_LOCATIONS }),
    ApiResponse({
      status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
      description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_LOCATIONS,
      type: [CityResponseDto],
    }),
  );
};