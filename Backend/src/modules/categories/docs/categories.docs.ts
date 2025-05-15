import { applyDecorators } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger";
import { SwaggerTags } from "src/utils/constants";
import { CategoryResponseDto } from "../dto/category-response.dto";

export const ApiCategoriesDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_CATEGORIES }),
    ApiResponse({
      status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
      description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_CATEGORIES,
      type: [CategoryResponseDto],
    }),
  );
};
