import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3001);
  app.enableCors({
    origin: '*',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
  });
}
bootstrap();
