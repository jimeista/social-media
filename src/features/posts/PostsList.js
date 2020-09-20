import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { PostAuthor } from './PostAuthor'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  const renderPosts = () =>
    orderedPosts.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p>{post.content.substring(0, 100)}</p>
        <ReactionButtons post={post} />
        <Link to={`/posts/${post.id}`} className='button muted-button'>
          View Post
        </Link>
      </article>
    ))

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}
