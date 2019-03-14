const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: [
          "/",
          "/contact",
          "/im-fine",
          "/happy",
          "/cat",
          "/projects/synthetic-data-generator",
          "/projects/traffic-light-detector",
          "/projects/interframe-compression",
          "/projects/ottabotics-learn",
          "/projects/lifes-charge",
          "/projects/potato-simulator",
          "/projects/spells-and-steel",
          "/projects/minecraft-art",
          "/projects/pusheen-coins",
          "/projects/piano-tiles-bot",
          "/projects/habit-visualization",
          "/projects/sleep-visualization",
          "/projects/gotta-go",
          "/projects/photoshop-battles",
          "/projects/moon-photos",
          "/projects/photography",
          "/projects/mtc-training"
        ],
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true
        },
        renderer: new Renderer({
          maxConcurrentRoutes: 4
        })
      })
    ]
  }
};
