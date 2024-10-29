const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = async function (env, argv) {
  env.projectRoot = path.resolve(__dirname, './'); // Adjust this path as needed

  const config = await createExpoWebpackConfigAsync(env, argv);

  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    crypto: 'crypto-browserify',
  };

  // Add a rule for loading font files (.ttf, .woff, .woff2)
  config.module.rules.push({
    test: /\.(ttf|otf|eot|woff|woff2)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: 'static/fonts/', // This will place the font files in `.next/static/fonts/`
        publicPath: '/_next/static/fonts/', // Ensures fonts are accessible via Next.js
      },
    },
  });

  config.plugins.push(
    new WorkboxPlugin.GenerateSW({
      swDest: 'dist/sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: ({ request }) =>
            request.destination === 'style' || request.destination === 'script',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
          },
        },
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'pages-cache',
            networkTimeoutSeconds: 3,
          },
        },
      ],
    })
  );

  return config;
};
