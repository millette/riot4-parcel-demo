// self
import { registerAuto, setup } from "./utils.js"
import RiotApp from "./tags/app.riot"
import TagTwo from "./tags/tag-two.riot"
import TagThree from "./tags/tag-three.riot"
import Tags from "./tags/tags.riot"
import Max from "./tags/max.riot"

registerAuto(Max)
registerAuto(TagTwo)
registerAuto(Tags)
const tags = registerAuto(TagThree)
setup(RiotApp, { tags, message: "Hello there" })
