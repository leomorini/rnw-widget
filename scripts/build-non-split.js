const path = require("path");
const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js"); // If you ejected, use this instead: const defaults = rewire('./build.js')

let config = defaults.__get__("config");

const entry = path.resolve(__dirname, "../src/index.extension.js");

config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};

config.entry = entry;
config.output.filename = 'extension/[name].js';
config.plugins[5].options.filename = 'extension/[name].css';
config.optimization.runtimeChunk = false;