import React from 'react'

const PostTest = ({post}:any) => {
  const { name, description, price } =  post
  return (
    <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>{}
    </div>
  )
}

export default PostTest