export const ERROR_CODE = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  INTERNER_SERVER_ERROR: 'INTERNER_SERVER_ERROR',
} as const;

export type ERROR_CODE_TYPE = (typeof ERROR_CODE)[keyof typeof ERROR_CODE];