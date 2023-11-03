module.exports = {
  preset: 'react-native',
  transform: {
    "^.+\\.(js|ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
