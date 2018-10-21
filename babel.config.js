module.exports = {
  "presets": [
    "@vue/app"
  ],
  "plugins": [
    "@babel/plugin-proposal-object-rest-spread",
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    [
      "module-resolver",
      {
        "alias": {
          "src": "./src"
        }
      }
    ],
    [
      "import",
      {
        "libraryName": "iview",
        "libraryDirectory": "src/components"
      }
    ]
  ]
}
