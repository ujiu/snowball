import './style.css'

function* fn(items) {
  let base = items % 5 || 5

  for (let i = 0; i < 5; i++) {
    yield items
  }

  if (base !== 1) {
    for (let j = 0; j < 5; j++) {
      for (let i = base; i > 0; i--) {
        yield items - i + 1
      }
    }
  }

  let res = items
  if (base === 5) {
    let level = 5

    do {
      res = Math.floor(items / level)
      const flag = res % 5
      if (flag !== 0) {
        const a = flag * level
        for (let j = 0; j < 5; j++) {
          for (let i = a; i > 0; i--) {
            yield items - i + 1
          }
        }
      }

      level = level * 5
    } while (res > 0)
  }
}

const list = []
for (let j = 0; j < 1000; j++) {
  const run = fn(j + 1)
  for (let i of run) {
    list.push(i)
  }
}

document.querySelector('#app').innerHTML = list.join(', ')
console.log(list.length)
