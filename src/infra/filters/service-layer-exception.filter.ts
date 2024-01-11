import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import {
  AuthenticationException,
  AuthorizationException,
  ServiceLayerException,
} from '../../shared/exceptions/service-layer.exception';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(ServiceLayerException)
export class ServiceLayerExceptionToHttpExceptionFilter extends BaseExceptionFilter {
  catch(exception: ServiceLayerException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    if (exception instanceof AuthenticationException)
      status = HttpStatus.UNAUTHORIZED;
    if (exception instanceof AuthorizationException)
      status = HttpStatus.UNAUTHORIZED;

    res.status(status).json({
      errorCode: exception.errorCode,
      message: exception.message,
    });
  }
}
