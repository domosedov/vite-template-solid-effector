import { createStore, createEvent } from 'effector'

export const increment = createEvent()

export const $count = createStore(0)

$count.on(increment, count => count + 1)
