const phase = process.env.NODE_ENV

export async function getMyGitHubProfile() {
  let result

  if (phase === 'development') {
    result = Promise.resolve({
      login: 'JaeYeopHan',
      html_url: 'github.com/JaeYeopHan',
      blog: 'jbee.io',
      avartar_url: '',
    })
  } else {
    const response = await fetch('https://api.github.com/users/JaeYeopHan')
    result = await response.json()
  }

  return result
}
