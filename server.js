require("@riotjs/ssr/register")()

const render = require("@riotjs/ssr")
console.log("render", render)

const TagThree = require("./tags/tag-three.riot").default
console.log("TagThree", TagThree)

const html = render("tag-three", TagThree, { el: 42, flash: "" })
console.log("html", html)
