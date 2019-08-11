(async () => {
  const mjs = await import("./mjs/index.mjs")
  const cjs = require("./cjs/index.cjs")
  console.log("done", mjs.default, cjs)
})()

