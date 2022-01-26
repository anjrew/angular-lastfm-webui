module.exports = {
  '/2.0/*': {
    target: 'http://ws.audioscrobbler.com',
    secure: false,
    changeOrigin: true,
    logLevel: "debug",

  }
};
