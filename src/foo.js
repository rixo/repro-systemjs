export let foo = 'foo'

setTimeout(() => {
  foo = foo + 'bar'
}, 100)

setTimeout(() => {
  foo += 'baz'
}, 300)
