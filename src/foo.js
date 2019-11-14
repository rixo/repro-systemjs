export let foo = 'foo'

setTimeout(() => {
  foo = foo + 'bar' // works
}, 100)

setTimeout(() => {
  foo += 'baz' // does not work
}, 300)
