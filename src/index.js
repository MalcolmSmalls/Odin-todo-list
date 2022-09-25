import { TodoFactory } from "./todoFactory.js"

const makeBeats = TodoFactory('Make Beats', 'Make a lot of beats', '9-30-2022', 1, 'default', 'incomplete')

console.log(makeBeats.description)
