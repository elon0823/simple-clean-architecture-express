import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ['**/*.steps.ts', '**/*.test.ts'],
};

export default config;
