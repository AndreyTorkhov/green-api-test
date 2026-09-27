export default {
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/helpers/*.test.ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: {
          module: "CommonJS",
          moduleResolution: "Node",
          verbatimModuleSyntax: false,
        },
      },
    ],
  },
};
