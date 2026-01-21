module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(ttf)$': '<rootDir>/__mocks__/file-mock.js',
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-native.*|@react-native.*|@?react-navigation.*)/)"
  ],
  testEnvironment: "node",
  setupFiles: [
    './__mocks__/file-mock.js'
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
  ],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
    "\\.ts$": "ts-jest"
  },
};
