import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from '../../src/app/app.service'

describe('AppService', () => {
  let appService: AppService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService]
    }).compile()

    appService = module.get<AppService>(AppService)
  })

  describe('getHello', () => {
    it('should return "Hello World!" when no name is provided', () => {
      expect(appService.getHello()).toBe('Hello World!')
    })

    it('should return a personalized greeting when a name is provided', () => {
      expect(appService.getHello('Fernando')).toBe('Hello, Fernando!')
    })
  })
})
