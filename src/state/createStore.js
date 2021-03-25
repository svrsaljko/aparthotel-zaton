import { createStore } from "redux"
import reducer from "../reducers"

// preloadedState will be passed in by the plugin
const preloadedState = () => {
  return createStore(reducer)
}
export default preloadedState
