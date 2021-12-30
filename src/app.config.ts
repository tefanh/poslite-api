import { SetMetadata } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

export const GLOBAL_AUTH_CONFIG = {
  provide: APP_GUARD,
  useClass: JwtAuthGuard,
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
