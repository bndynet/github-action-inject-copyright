/**!
   * @bndynet/github-action-inject-copyright v0.0.0
   * git+https://github.com/bndynet/github-action-inject-copyright.git
   *
   * Copyright (c) 2020 undefined
   * Released under the MIT license
   */
  module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
}