module.exports = (api) => {
  const isTest = api.env('test')
  // You can use isTest to determine what presets and plugins to use.

  return {
    plugins: ['@babel/plugin-transform-async-to-generator'],
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  }
}
