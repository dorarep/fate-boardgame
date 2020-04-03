const path = require('path');

module.exports = {
  env: {
    "API_KEY": process.env.API_KEY,
    "APP_DOMAIN": process.env.APP_DOMAIN,
    "DATABASE_URL": process.env.DATABASE_URL,
    "PROJECT_ID": process.env.PROJECT_ID,
    "STORAGE_BUCKET": process.env.STORAGE_BUCKET,
    "MESSAGING_SENDER_ID": process.env.MESSAGING_SENDER_ID,
    "APP_ID": process.env.APP_ID,
    "MEASUREMENT_ID": process.env.MEASUREMENT_ID
  },
  webpack(config, options) {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    return config
  }
};
