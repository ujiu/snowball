import './style.css'

function* fn(item = 1) {
  // for (let item = 1; item <= items; item++) {}
  let base = item % 5 || 5

  for (let i = 0; i < 5; i++) {
    yield item
  }

  if (base !== 1 && base !== 5) {
    for (let j = 0; j < 5; j++) {
      for (let i = base; i > 0; i--) {
        yield item - i + 1
      }
    }
  }

  let res = item
  if (base === 5) {
    let level = 5

    do {
      res = Math.floor(item / level)
      const flag = res % 5
      if (flag !== 0) {
        const a = flag * level
        for (let j = 0; j < 5; j++) {
          for (let i = a; i > 0; i--) {
            yield item - i + 1
          }
        }
      }

      level = level * 5
    } while (res > 0)
  }
}

const run = fn(11)

const coreBtn = document.querySelector('#coreBtn')

coreBtn.addEventListener('click', () => {
  const target = run.next()
  if (target.done) {
    coreBtn.innerText = '✔'
    coreBtn.disabled = true
  } else {
    coreBtn.innerText = target.value
  }
})
