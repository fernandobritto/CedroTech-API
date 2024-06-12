export default {
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  moduleNameMapper: {
    '@application/(.*)': '<rootDir>/src/application/$1',
    '@common/(.*)': '<rootDir>/src/common/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1',
    '@presenter/(.*)': '<rootDir>/src/presenter/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  },
  setupFiles: ['<rootDir>/tests/utils/environment-variables.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/src/infrastructure/libs'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60
    }
  },
  transform: {
    '^.+\\.(t|j)s?$': '@swc/jest'
  }
}
