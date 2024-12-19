<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

```
npm i --save @nestjs/config
# npm i --save @fastify/static @fastify/view handlebars

npm i --save @nestjs/platform-fastify --legacy-peer-deps

npm install --save @nestjs/swagger



nest generate app jobs-service



docker build -f docker/job-board.docker --no-cache -t job-board-backend-app:20241216.005 .
docker run --name job-board-backend-app -p 9876:9876 --env-file env_for_docker/.env.job-board job-board-backend-app:20241216.005

docker build -f docker/job-board.docker --no-cache -t job-board-backend-app:20241216.006 .
docker run --name job-board-backend-app -p 9876:9876 --env-file env_for_docker/.env.job-board job-board-backend-app:20241216.006


docker build -f docker/job-board.docker --no-cache -t job-board-backend-app:20241216.01 .
docker run --name job-board-backend-app -p 9876:9876 --env-file env_for_docker/.env.job-board job-board-backend-app:20241216.01

docker build -f docker/job-service.docker --no-cache -t job-service:20241216.01 .
docker run --name job-service -p 9877:9877 --env-file env_for_docker/.env.job-service job-service:20241216.01


docker tag job-board-backend-app:20241216.01 tnvpandian/cloud-apps:job-board-20241216.01
docker push tnvpandian/cloud-apps:job-board-20241216.01


latest one

docker tag job-board-backend-app:20241216.01 tnvpandian/job-board-gcp:job-board-20241216.01
docker push tnvpandian/job-board-gcp:job-board-20241216.01

docker tag job-board-backend-app:20241216.01 cloud-apps/job-board-gcp:job-board-20241216.01
docker push cloud-apps/job-board-gcp:job-board-20241216.01


https://gcp-micro-services-559251733449.us-central1.run.app

docker.io/tnvpandian/job-board-gcp:job-board-20241216.01

docker run --name job-board-backend-app -p 9876:9876 --env-file env_for_docker/.env.job-board job-board-backend-app:20241216.02


docker build -f docker/job-board.docker --no-cache -t job-board-backend-app:20241216.02 .
docker tag job-board-backend-app:20241216.02 tnvpandian/job-board-gcp:job-board-20241216.02
docker push tnvpandian/job-board-gcp:job-board-20241216.02

docker.io/tnvpandian/job-board-gcp

docker.io/tnvpandian/job-board-gcp:job-board-20241216.02


docker build -f docker/job-board.docker --platform linux/amd64 --no-cache -t job-board-backend-app:20241216.04 .



docker buildx build --file docker/job-board.docker --platform linux/amd64 -t job-board-backend-app:20241216.05 .
docker tag job-board-backend-app:20241216.05 tnvpandian/job-board-gcp:job-board-20241216.05
docker push tnvpandian/job-board-gcp:job-board-20241216.05


docker.io/tnvpandian/job-board-gcp:job-board-20241216.05
```


### 20241217: Migrated to Github ###

Repo URL: https://github.com/tnvpandian/gcp-job-board-service



gsutil iam ch serviceAccount:[fiery-muse-444714-g2]@cloudbuild.gserviceaccount.com:roles/storage.objectCreator \
  gs://tnvp-gcp-services-logs


gcloud projects add-iam-policy-binding fiery-muse-444714-g2 \
    --member "serviceAccount:build-service-connection@fiery-muse-444714-g2.iam.gserviceaccount.com" \
    --role "roles/storage.admin"


gcloud projects get-iam-policy fiery-muse-444714-g2




URL:
https://cloud-apps-job-board-616634861511.europe-west2.run.app/job-board/v1/api-docs#/JobBoard/JobBoardController_getSkillSetsDummyData


Fire Store:
cloud-apps-fire-store


gcloud projects get-iam-policy cloud-app-services

gcloud projects add-iam-policy-binding fiery-muse-444714-g2 \
    --member "serviceAccount:build-service-connection@fiery-muse-444714-g2.iam.gserviceaccount.com" \
    --role "roles/datastore.owner"


    1  gc
    2  date
    3  uname -a
    4  gcloud projects get-iam-policy fiery-muse-444714-g2
    5  gcloud projects get-iam-policy fiery-muse-444714-g2  more
    6  gcloud projects get-iam-policy fiery-muse-444714-g2 | more
    7  gcloud projects add-iam-policy-binding fiery-muse-444714-g2     --member "serviceAccount:fiery-muse-444714-g2@cloudbuild.gserviceaccount.com"     --role "roles/storage.admin"
    8  gcloud projects add-iam-policy-binding s559251733449     --member "s559251733449-compute@developer.gserviceaccount.com"     --role "roles/storage.admin"
    9  gcloud projects add-iam-policy-binding fiery-muse-444714-g2     --member "s559251733449-compute@developer.gserviceaccount.com"     --role "roles/storage.admin"
   10  gcloud projects get-iam-policy fiery-muse-444714-g2 | more
   11  serviceAccount:build-service-connection@fiery-muse-444714-g2.iam.gserviceaccount.com
   12  gcloud projects add-iam-policy-binding fiery-muse-444714-g2     --member "serviceAccount:s559251733449-compute@developer.gserviceaccount.com"     --role "roles/storage.admin"
   13  gcloud projects add-iam-policy-binding fiery-muse-444714-g2     --member "serviceAccount:build-service-connection@fiery-muse-444714-g2.iam.gserviceaccount.com"     --role "roles/storage.admin"
   14  history



gcloud projects add-iam-policy-binding fiery-muse-444714-g2     --member "serviceAccount:build-service-connection@fiery-muse-444714-g2.iam.gserviceaccount.com"     --role "roles/storage.admin"

616634861511-compute@developer.gserviceaccount.com


gcloud projects add-iam-policy-binding cloud-app-services --member "serviceAccount:616634861511-compute@developer.gserviceaccount.com" --role "roles/datastore.owner"


nest generate library fire-store


Enable IAM API

https://cloud.google.com/iam/docs/keys-create-delete#macos



gcloud config set project cloud-app-services

gcloud projects add-iam-policy-binding cloud-app-services \
    --member="serviceAccount:616634861511-compute@developer.gserviceaccount.com" \
    --role="roles/datastore.owner"

Database id must be specified in the FireStore initialization along with projecid and key path.


{
      provide: Firestore,
      inject: [ConfigService],
      useFactory: () => {
        const firestore = new Firestore({
          projectId: 'cloud-app-services', //configService.get<string>('GCP_CLOUD_APPS_PROJECT_ID'),
          keyFilename:
            '/Users/tnvpandian/Downloads/cloud-app-services-2cf38d70b766.json',
          databaseId: 'cloud-apps-fire-store',
          //configService.get<string>(
          //  'GCP_CLOUD_APPS_SA_KEY_FILE_PATH',
          // ), // Path to your JSON key
        });
        console.log('Firestore Instance created', firestore);
        return firestore;
      },
}


#### Logging
npm install pino pino-pretty
