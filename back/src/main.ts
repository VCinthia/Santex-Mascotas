import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule
  //,new ExpressAdapter() // Usa ExpressAdapter
  );
  //CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Cambia esto a tu URL de frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
  
}
bootstrap();
