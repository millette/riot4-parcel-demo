// npm
import { component, register } from "riot"

const registerAuto = (t) => register(t.name, t)
const setup = (a, props) => component(a)(document.querySelector(a.name), props)

export { registerAuto, setup }
