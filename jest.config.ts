export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  transformIgnorePatterns: ['node_modules/(?!@nestjs/axios)'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1'
  },
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.+(ts|tsx|js)',
    '**/?(*.)+(integration-spec|spec|e2e-spec).+(ts|tsx|js)'
  ],
  testTimeout: 60000,
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'commonjs',
          moduleResolution: 'node',
          resolvePackageJsonExports: false
        }
      }
    ]
  }
}
