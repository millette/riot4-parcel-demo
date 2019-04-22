// core
const { readFileSync } = require("fs")

// npm
require("@riotjs/ssr/register")()
const riot = require("riot")
const render = require("@riotjs/ssr")

// self
const TagThree = require("./tags/tag-three.riot").default
const TagTwo = require("./tags/tag-two.riot").default
const Tags = require("./tags/tags.riot").default
const RiotApp = require("./tags/app.riot").default

riot.register(TagTwo.name, TagTwo)
riot.register(TagThree.name, TagThree)
const tags = riot.register(Tags.name, Tags)
const htmlApp = render("riot-app", RiotApp, { tags, message: "Hello there" })
const fc = readFileSync("index.html", "utf8")
const out = fc.replace("<riot-app></riot-app>", htmlApp)
console.log(out)
