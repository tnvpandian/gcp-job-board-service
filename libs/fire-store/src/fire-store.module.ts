import { Global, Module } from '@nestjs/common';
import { FireStoreService } from './fire-store.service';
import { Firestore } from '@google-cloud/firestore';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [
    {
      provide: Firestore,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const firestore = new Firestore({
          projectId: configService.get<string>('GCP_CLOUD_APPS_PROJECT_ID'),
          keyFilename: configService.get<string>(
            'GCP_CLOUD_APPS_SA_KEY_FILE_PATH',
          ),
          databaseId: configService.get<string>('GCP_CLOUD_APPS_DATABASE_ID'),
        });
        //console.log('Firestore Instance created', firestore);
        return firestore;
      },
    },
    FireStoreService,
  ],
  exports: [Firestore, FireStoreService],
})
export class FireStoreModule {}
