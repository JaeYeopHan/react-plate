export function getMockData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        login: 'JaeYeopHan',
        html_url: 'github.com/JaeYeopHan',
        blog: 'jbee.io',
        avartar_url: '',
      })
    }, 1000)
  })
}
