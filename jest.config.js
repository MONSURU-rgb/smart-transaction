import "@testing-library/jest-dom";

setupFilesAfterEnv: ["<rootDir>/jest.setup.js"];
moduleNameMapper: {
  ("^@/(.*)$");
  ("<rootDir>/$1");
}
