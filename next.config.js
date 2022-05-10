const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'steven_li',
        mongodb_password: 'Dreamjym914',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'steven_li',
      mongodb_password: 'Dreamjym914',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog',
    },
  };
};
