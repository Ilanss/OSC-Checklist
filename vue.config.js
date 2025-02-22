const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "OSC Checklist",
        win: {
          "target": [
            "portable",
            "nsis"
          ],
          icon: "src/assets/icon.png",
          publish: ["github"]
        },
        mac: {
          icon: "src/assets/icon.icns",
        },
        "nsis": {
          "installerIcon": "src/assets/icon.ico",
          "uninstallerIcon": "src/assets/icon.ico",
        },
        publish: [
          {
            provider: "github",
            owner: "Ilanss",
            private: false,
            repo: "OSC-Checklist"
          }
        ]
      }
    }
  }
})
