import React, {Component} from 'react'
import {connect} from 'react-redux'

import spinner from './spinner.gif'
import {fetchPosts} from './actions'
import Post from './Post'
import './Posts.css'

class Posts extends Component {
  componentDidMount() {
    this.props.loadData()
  }

  render() {
    const {isLoading, error} = this.props.posts
    if (isLoading) {
      return (
        <div className="Posts">
          <img className="Posts-spinner" alt='spinner' src={spinner} />
        </div>
      )
    }

    if (error) {
      return (
        <div className="Posts">
        <div className="Posts-error">
        {JSON.stringify(error)}
        </div>
        </div>
      )
    }

    return (
      <div className="Posts">
      {this.props.visiblePosts.map(post => <Post key={post.id} {...post} />)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {posts} = state
  return {
    visiblePosts: state.posts.visibleData,
    posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
