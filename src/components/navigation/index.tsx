import React from 'react'
import { Link } from 'react-router-dom'
import { PAGES } from 'routes'

const Navigation = () => {
  return (
    <nav>
      <Link to={PAGES.HOME} style={{ margin: '0px 8px' }}>
        Home
      </Link>
      <Link to={PAGES.CONTENTS} style={{ margin: '0px 8px' }}>
        Contents
      </Link>
      <Link to={PAGES.COUNTER} style={{ margin: '0px 8px' }}>
        Counter
      </Link>
      <Link to={PAGES.TODO} style={{ margin: '0px 8px' }}>
        Todo
      </Link>
      <Link to={PAGES.MY_GITHUB} style={{ margin: '0px 8px' }}>
        MyGitHub
      </Link>
    </nav>
  )
}

export default Navigation
