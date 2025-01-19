const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Specify the file extensions Metro should be aware of
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'mjs'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
