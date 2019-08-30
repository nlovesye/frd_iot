module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./src/libs",
            "rootPathPrefix": "@lib"
          },
          {
            "rootPathSuffix": "./src/api",
            "rootPathPrefix": "@api"
          }
        ]
      }
    ]
  ]
}
