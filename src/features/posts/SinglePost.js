import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const SinglePost = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h1>No post found</h1>
      </section>
    )
  }

  return (
    <section>
      <article>
        <h1>{post.title}</h1>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p>{post.content}</p>
      </article>
      <ReactionButtons post={post} />
      <Link to={`/edit/${post.id}`}>Edit</Link>
    </section>
  )
}
