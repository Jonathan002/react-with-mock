const webpack = require("webpack");

module.exports = function override(config, env) {
  if (!config.optimization) {
    config.optimization = {};
  }

  config.optimization.usedExports = true;
  config.optimization.sideEffects = true;

  config.optimization.minimizer = config.optimization.minimizer.map(
    (plugin) => {
      if (plugin.constructor.name === "TerserPlugin") {
        plugin.options.minimizer.options = {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
            dead_code: true,
            conditionals: true,
            unused: true,
            if_return: true,
            pure_funcs: ["console.log"],
            pure_getters: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        };
      }
      return plugin;
    }
  );

  return config;
};
