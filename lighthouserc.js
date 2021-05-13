module.exports = {
  ci: {
	collect: {
      staticDistDir: './',
    },
    assert: {
      preset: 'lighthouse:all',
      assertions: {
        'long-tasks': { 'minScore': 0 }
      }
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lh.rolandvanipenburg.com',
      token: '2ca3ff92-6eb7-4b49-9ef6-cf25418b65cd',
    },
  },
};
