// npm
import { register, mount } from "riot"

// self
import RiotApp from "./tags/app.riot"

register("riot-app", RiotApp)
mount("riot-app", { message: "Hello there" })
