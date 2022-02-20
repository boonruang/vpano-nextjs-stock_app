import React, { StyleHTMLAttributes } from 'react'

type Props = {
  style?: React.CSSProperties
}

export default function Footer({ style }: Props) {
  return (
    <div style={style}>
      {/* alt 0169 */}
      <span style={{ paddingLeft: 280 }}>
        Copyright © 2020 CodeMobiles Co., Ltd. All Rights Reserved. reserved.
      </span>
    </div>
  )
}
