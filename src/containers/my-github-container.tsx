import React, { useEffect } from 'react'
import { useStore } from '../modules'
import * as myGitHub from '../modules/my-github'
import { getMyGitHubProfile } from '../api'

const MyGitHubContainer = () => {
  const [state, dispatch] = useStore(myGitHub.NAMESPACE)
  const { isLoading, contents } = state

  useEffect(() => {
    const fetchData = async () => {
      dispatch(myGitHub.fetch())

      try {
        const response = await getMyGitHubProfile()
        dispatch(myGitHub.fetchSuccess(response))
      } catch (error) {
        dispatch(myGitHub.fetchFail())
      }
    }

    fetchData()
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div>
        <span>NAME: </span>
        {contents.login}
      </div>
      <div>
        <span>URL: </span>
        {contents.html_url}
      </div>
      <div>
        <span>BLOG: </span>
        {contents.blog}
      </div>
      <img src={contents.avatar_url} alt="profile_image" />
    </div>
  )
}

export default MyGitHubContainer
