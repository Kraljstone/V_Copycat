import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PaginatedAutomobileResponseDto } from '../dto/paginated-automobile-response.dto';
import { SwaggerTags } from 'src/utils/constants';
import { AutomobileResponseDto } from '../dto/automobile-response.dto';

export const ApiLatestAutomobilesDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_LATEST_AUTOMOBILES }),
    ApiQuery({
      name: SwaggerTags.API.QUERY_PARAMS.PAGE,
      required: false,
      type: Number,
      description: SwaggerTags.API.QUERY_PARAMS.PAGE_DESCRIPTION,
      example: SwaggerTags.API.QUERY_PARAMS.PAGE_EXAMPLE,
    }),
    ApiResponse({
      status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
      description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_LATEST_AUTOMOBILES,
      type: PaginatedAutomobileResponseDto,
    }),
    ApiResponse({
      status: SwaggerTags.API.RESPONSE.BAD_REQUEST.STATUS.CODE,
      description: SwaggerTags.API.RESPONSE.BAD_REQUEST.STATUS.MESSAGE.GET_LATEST_AUTOMOBILES,
    }),
  );
};

export const ApiAutomobileAdDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_AUTOMOBILE_AD }),
    ApiParam({
      name: SwaggerTags.API.PARAMS.AUTOMOBILES.SLUG,
      description: SwaggerTags.API.PARAMS.AUTOMOBILES.DESCRIPTION,
      example: SwaggerTags.API.PARAMS.AUTOMOBILES.EXAMPLE,
    }),
  );
};

export const ApiSponsoredAdsDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_SPONSORED_ADS }),
    ApiResponse({
      status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
      description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_SPONSORED_ADS,
      type: [AutomobileResponseDto],
    }),
  );
};
