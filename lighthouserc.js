module.exports = {
  ci: {
    collect: {
      staticDistDir: './build',
      url: ['http://localhost:3000'],
      collect: {
        numberOfRuns: 3,
      },
    },
    upload: {
      startServerCommand: 'npm run start',
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
  },
};
