import { getMockData } from 'utils/mock'

const phase = process.env.NODE_ENV

export async function getMyGitHubProfile() {
  let result

  if (phase === 'development') {
    result = await getMockData()
  } else {
    const response = await fetch('https://api.github.com/users/JaeYeopHan')
    result = await response.json()
  }

  return result
}
