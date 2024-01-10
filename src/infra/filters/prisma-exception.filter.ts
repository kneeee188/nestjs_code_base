import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { PrismaErrorCodes } from '../../shared/database/prisma/prisma.constant';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    if (exception.code === PrismaErrorCodes.UNIQUE_INDEX_CONFLICT) {
      const status = HttpStatus.CONFLICT;
      response.status(status).json({
        errorCode: message,
        message: exception.message,
      });

      return;
    }
  }
}
