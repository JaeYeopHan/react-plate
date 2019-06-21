export function delay(timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, timeout)
  })
}

export function info(action) {
  console.log(action)
}
