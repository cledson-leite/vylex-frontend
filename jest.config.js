module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1',
  },
};
