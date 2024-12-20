const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "OSC Checklist",
        win: {
          "target": [
            "nsis"
          ],
          icon: "src/assets/icon.png",
        },
        "nsis": {
          "installerIcon": "src/assets/icon.ico",
          "uninstallerIcon": "src/assets/icon.ico",
        }
      }
    }
  }
})
