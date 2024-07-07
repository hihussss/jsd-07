const config = {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry",
          "corejs": "3.22"
        }
      ]
    ]
  };

module.exports = config