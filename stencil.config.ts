import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "bruno",
  outputTargets: [
    { type: "dist" },
    { type: "docs-readme" },
    {
      type: "www",
      serviceWorker: null
    }
  ],
  globalStyle: "src/globals/style.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/globals/_common.scss"]
    })
  ],
  testing: {
    browserArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
    browserHeadless: true
  }
};
