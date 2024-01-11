import { BaseException } from './base.exception';

export abstract class ServiceLayerException extends BaseException {}

// Do not makes it have the same name with nest.js built-in exception name
export abstract class AuthenticationException extends ServiceLayerException {}
export abstract class AuthorizationException extends ServiceLayerException {}

export class UserAlreadyExists extends AuthenticationException {}
