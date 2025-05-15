import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SwaggerTags } from 'src/utils/constants';
import { HomeResponseDto } from '../dto/home-response.dto';

export const ApiLatestAdsDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_LATEST_ADS }),
    ApiResponse({
      status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
      description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_LATEST_ADS,
      type: HomeResponseDto,
    }),
  );
};
