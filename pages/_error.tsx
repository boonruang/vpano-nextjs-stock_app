import React, { useEffect } from 'react'
import Router from 'next/router'

type Props = {
  statusCode: string
}

// Called in client-side
export default function Error({ statusCode }: Props) {
  useEffect(() => {
    // ทำ delay ให้เห็น error 2 วิ ก่อน Push
    setTimeout(() => {
      Router.push('/')
    }, 2000)
  }, [])

  return (
    <div>
      <h1>Error : {statusCode}</h1>
    </div>
  )
}

// Called in server-side
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  //   if (statusCode == 404) {
  //     res.writeHead(301, { Location: '/' })
  //     res.end()
  //     return {}
  //   } else {
  //     return { statusCode }
  //   }

  return { statusCode }
}
