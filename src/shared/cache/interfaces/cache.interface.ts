export abstract class ICacheService {
  get: (key: string) => Promise<string | undefined>;
  set: (key: string, value: any) => Promise<void>;
  // setex: (key: string, expire: number, value: any) => Promise<void>;
}
