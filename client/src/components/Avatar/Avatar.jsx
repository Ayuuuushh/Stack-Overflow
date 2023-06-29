import React from 'react'

const Button = ({children, backgroundColor,px,py,color,borderRadius,fontSize,textAlign,cursor}) => {
  const style={
    backgroundColor,
    padding: `${px} ${py}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration:"none"
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Button
