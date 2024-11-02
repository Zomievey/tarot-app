module.exports = {
  presets: [
    'babel-preset-expo',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ["@babel/plugin-transform-class-properties", { "loose": true }],
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    ["@babel/plugin-transform-private-property-in-object", { "loose": true }]
  ]
};
