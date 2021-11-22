const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: './public/index.js',
    output: {
      path: __dirname + '/public/dist',
      filename: 'bundle.js',
    },
    mode: 'production',
      plugins: [
      new WebpackPwaManifest({
        filename: 'manifest.json',
        inject: false,
        fingerprints: false,
  
        name: 'Budget-Tracker',
        short_name: 'BT',
        description: 'An app that tracks your budget offline',
        background_color: '#113e52',
        theme_color: '#c3e8f7',
        start_url: '/',
        display: 'standalone',
  
        icons: [
          {
            src: path.resolve(__dirname, 'public/icons/icon-512x512.png'),
            sizes: [192, 512],
          },
        ],
      }),
    ],
  };
  
  module.exports = config;