(async () => {
  const mjs = await import("mjs-js").catch(console.log)
  const cjs = require("cjs-js")
  console.log("done", mjs.default, cjs)
})()

