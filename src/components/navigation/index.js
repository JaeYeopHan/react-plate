import React from 'react'
import { Link } from 'react-router-dom'
import { PAGES } from 'routes'

const Navigation = () => {
  return (
    <nav>
      <Link to={PAGES.HOME}>Home</Link>
      <Link to={PAGES.CONTENTS}>Contents</Link>
    </nav>
  )
}

export default Navigation
