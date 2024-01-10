export interface IErrorContent {
  message: string;
  errorCode: string;
}

export const ErrorCode = {
  USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
  INTERNAL_SERVER_ERROR: 'INTERNER_SERVER_ERROR',
} as const;

export type TErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

export const ErrorBody: Record<keyof typeof ErrorCode, IErrorContent> = {
  USER_ALREADY_EXISTS: {
    errorCode: ErrorCode.USER_ALREADY_EXISTS,
    message: 'User already exists',
  },
  INTERNAL_SERVER_ERROR: {
    errorCode: ErrorCode.INTERNAL_SERVER_ERROR,
    message: 'Internal server error',
  },
};

export type TErrorBody = (typeof ErrorBody)[keyof typeof ErrorBody];
