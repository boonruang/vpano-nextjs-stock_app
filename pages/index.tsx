import React, { ReactElement } from 'react'

type Props = {}

export default function Index({}: Props): ReactElement {
  return (
    <div>
      <h1>Index</h1>
    </div>
  )
}

// called in server-side
Index.getInitialProps = ({ res, err }) => {
  res.writeHead(301, { location: '/login' })
  res.end()

  return {}
}
