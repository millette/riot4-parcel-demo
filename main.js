// npm
import { component } from "riot"

// self
import RiotApp from "./tags/app.riot"

component(RiotApp)(document.querySelector("main"), {
  message: "Hello there",
})
