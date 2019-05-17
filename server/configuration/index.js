if (process.env.NODE_ENV === 'test') {
  module.exports = {
    JWT_SECRET: 'tripsterauthentication',
    oauth: {
      google: {
        clientID: 'number',
        clientSecret: 'string',
      },
      facebook: {
        clientID: 'number',
        clientSecret: 'string',
      },
    },
    nodemailer: {
      USER: 'admin@tripster.life',
      PASS: 'TripsterLife1!'
    }
  };
} else {
  module.exports = {
    JWT_SECRET: 'tripsterauthentication',
    oauth: {
      google: {
        clientID: 'number',
        clientSecret: 'string',
      },
      facebook: {
        clientID: 'number',
        clientSecret: 'string',
      },
    },
    nodemailer: {
      USER: 'admin@tripster.life',
      PASS: 'TripsterLife1!'
    }
  };
}