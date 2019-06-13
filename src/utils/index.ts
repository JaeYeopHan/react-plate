export function delay(timeout: number = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, timeout)
  })
}

export function info(action: any) {
  console.log(action)
}

export function getMockData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        login: 'JaeYeopHan',
        html_url: 'github.com/JaeYeopHan',
        blog: 'jbee.io',
        avartar_url: '',
      })
    }, 3000)
  })
}
