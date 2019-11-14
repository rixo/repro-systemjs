import { foo } from './foo'

const print = () => {
  console.log(foo)
}

print()

setTimeout(print, 200)
setTimeout(print, 400)
