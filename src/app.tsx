import type { Component } from 'solid-js'
import { useUnit } from 'effector-solid'
import * as model from './model.js'

export const App: Component = () => {
  const [count, inc] = useUnit([model.$count, model.increment])
  return (
    <div class='flex min-h-screen items-center justify-center bg-lime-500'>
      <div class='rounded-lg bg-white p-5'>
        <h1 class='text-2xl font-bold md:text-xl'>SolidJS + Effector</h1>
        <p class='mt-4'>Count: {count}</p>
        <button onClick={() => inc()} class='mt-4 rounded bg-lime-500 px-6 py-2 text-white'>
          Increment
        </button>
      </div>
    </div>
  )
}
