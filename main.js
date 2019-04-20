// npm
import { component, register } from "riot"
// import { component } from "riot"

// self
import RiotApp from "./tags/app.riot"
import TagTwo from "./tags/tag-two.riot"
import TagThree from "./tags/tag-three.riot"
// import { RiotApp, registerAll } from "./tags"
// registerAll()

register("tag-two", TagTwo)
register("tag-three", TagThree)

component(RiotApp)(document.querySelector("main"), {
  message: "Hello there",
})
