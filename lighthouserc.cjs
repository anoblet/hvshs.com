module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4321/'],
      numberOfRuns: 1,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
