import { BaseException } from './base.exception';

export abstract class RepositoryLayerException extends BaseException {}

// Do not makes it have the same name with nest.js built-in exception name
// export abstract class SomeTypeofException extends RepositoryLayerException {}
