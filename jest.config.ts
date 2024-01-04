export default {
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  moduleNameMapper: {
    '@database/(.*)': '<rootDir>/app/database/$1',
    '@functions/(.*)': '<rootDir>/app/functions/$1',
    '@middlewares/(.*)': '<rootDir>/app/middlewares/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  },
  setupFiles: ['<rootDir>/tests/environment-variables.ts'],
  collectCoverageFrom: ['<rootDir>/app/**/*.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.serverless/', '/.webpack/'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80
    }
  },
  transform: {
    '^.+\\.(t|j)s?$': '@swc/jest'
  }
}
