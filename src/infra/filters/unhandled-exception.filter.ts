import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ILoggerService } from '../../shared/logger/interface/logger-service.interface';
import { ErrorBody } from '../../shared/constants/error-body';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class UnhandledExceptionFilter extends BaseExceptionFilter {
  constructor(private readonly logger: ILoggerService) {
    super();
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      process.env.NODE_ENV !== 'prod' ? (exception as any).message : '';
    const error = ErrorBody.INTERNAL_SERVER_ERROR;

    // Send alert here or in logging server
    this.logger.error(
      `[${new Date()}] [${req.method}] ${req.url} / body: ${
        req.body
      } / code:${error}- ${exception} - ${(exception as any).stack}}`,
    );

    res.status(status).json({ ...error, detail: message });
  }
}
