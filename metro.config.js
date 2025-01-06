const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// Get the default Expo Metro config
const config = getDefaultConfig(__dirname);

// Add the `enhanceMiddleware` function to configure the browser for debugging
config.server = {
  ...config.server, // Preserve any existing server configurations
  enhanceMiddleware: (middleware, server) => {
    process.env.BROWSER = "/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox"; // Adjust for your OS
    return middleware;
  },
};

// Export the final config with NativeWind support
module.exports = withNativeWind(config, { input: "./global.css" });
