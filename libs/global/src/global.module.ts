import { Module } from '@nestjs/common';
import { GlobalService } from './global.service';
import { LoggerModule } from 'nestjs-pino';
import { FireStoreModule } from '@app/fire-store';

@Module({
  imports: [
    FireStoreModule,
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.PINO_LOG_LEVEL || 'info',
        base: undefined,
        formatters: {
          level: (label) => {
            return { level: label.toUpperCase() };
          },
        },
        timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
        serializers: {
          req: (req) => {
            // Customize request log
            return {
              method: req.method,
              url: req.url,
              // Add additional request details if required
            };
          },
          res: (res) => {
            return {
              statusCode: res.statusCode,
            };
          },
        },
      },
    }),
  ],
  providers: [GlobalService],
  exports: [GlobalService, FireStoreModule],
})
export class GlobalModule {}
