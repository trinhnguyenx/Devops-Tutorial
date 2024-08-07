import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule, { cors: true });

  app.getHttpAdapter().get('/health', (req, res) => {
    res.set('Cache-Control', 'no-store'); // Tắt caching
    return res.status(200).send('ok');
  });
  

  await app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
}

bootstrap();
