import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as myGitHub from '@/modules/my-github'
import { ILoadingState } from '@/modules/loading'
import { IRootState } from '@/modules/index'

const MyGitHubContainer = () => {
  const loading = useSelector<IRootState, ILoadingState>(state => state.loading)
  const { contents } = useSelector<IRootState, myGitHub.IMyGitHubState>(
    state => state[myGitHub.TYPE],
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(myGitHub.fetch())
  }, [dispatch])

  if (loading[myGitHub.TYPE]) {
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
