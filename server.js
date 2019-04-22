const riot = require("riot")

const tt0 = Date.now()
require("@riotjs/ssr/register")()
const tt1 = Date.now()
console.log("register", tt1 - tt0)
const render = require("@riotjs/ssr")
const tt2 = Date.now()
console.log("require render", tt2 - tt1)

const TagThree = require("./tags/tag-three.riot").default
const tt3 = Date.now()
console.log("require TagThree", tt3 - tt2)

const html = render("tag-three", TagThree, { el: 42, flash: "" })
const tt4 = Date.now()
console.log("render", tt4 - tt3, html)

const html2 = render("tag-three", TagThree, { el: 44, flash: "" })
const tt5 = Date.now()
console.log("render", tt5 - tt4)

const html3 = render("tag-three", TagThree, { el: 47, flash: "" })
const tt6 = Date.now()
console.log("render", tt6 - tt5)

riot.register(TagThree.name, TagThree)

const TagTwo = require("./tags/tag-two.riot").default
const tt7 = Date.now()
console.log("require TagTwo", tt7 - tt6)

const htmlTwo = render("tag-two", TagTwo)
const tt8 = Date.now()
console.log("render", tt8 - tt7, htmlTwo)
