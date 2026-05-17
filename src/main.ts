import 'newrelic'
import { NestFactory } from '@nestjs/core'
import { MainModule } from './app.module'
import { json, urlencoded } from 'express'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { ConfigService } from '@nestjs/config'

const API_PREFIX = 'api'

async function bootstrap() {
  const app = await NestFactory.create(MainModule, { cors: true })

  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ extended: true, limit: '50mb' }))

  app
    .enableVersioning({
      type: VersioningType.URI,
      defaultVersion: '1'
    })
    .setGlobalPrefix(API_PREFIX)

  const config = new DocumentBuilder()
    .setTitle('Cedro Tech Aplication')
    .setDescription('Cedro Tech API Documentation for developers')
    .setVersion('0.1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(`${API_PREFIX}/:version/docs`, app, document)

  const configService = app.get<ConfigService>(ConfigService)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )

  await app.listen(configService.get('PORT') || 3000)
}
bootstrap()
