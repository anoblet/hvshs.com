export default {
  ci: {
    collect: {
      url: ['http://localhost:4321'],
      startServerCommand: 'pnpm run preview',
      startServerReadyPattern: 'Local.*http://localhost',
      numberOfRuns: 1,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
