import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import ReactFilestack from 'filestack-react';

import {
  clearCreatePost,
  createPost
} from './actions'

import './CreatePost.css'

class CreatePost extends Component {
  constructor(props) {
    super(props)

    this.handleFile = this.handleFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      title: '',
      description: '',
      video: {
        file: {},
        data: null,
      },
    }
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleFile(result) {
    const file = result.filesUploaded[0]
    this.setState({
      video: {
        url: file.url,
        file: {
          name: file.filename,
          type: file.mimetype,
        }
      }
    })
  }

  render() {
    const {error, isLoading, didComplete} = this.props
    if (didComplete) {
      this.props.onSuccess()
      return <Redirect to="/" />
    }

    return (
      <div className={'CreatePost' + (isLoading ? ' CreatePost-isLoading' : '')}>
        <h1 className="CreatePost-header">Create a new post</h1>
        <form className="CreatePost-table" onSubmit={this.handleSubmit}>
          <div className="CreatePost-row">
            <label className="CreatePost-label" htmlFor="title">Title:</label>
            <input
              className="CreatePost-data"
              id="title"
              type="text"
              required
              maxLength="64"
              autoFocus
              onChange={(ev) => this.setState({title: ev.target.value})}
              />
          </div>
          <div className="CreatePost-row">
            <label className="CreatePost-label" htmlFor="description">Description:</label>
            <textarea
              className="CreatePost-data"
              id="description"
              type="text"
              required
              maxLength="256"
              rows="4"
              onChange={(ev) => this.setState({description: ev.target.value})}
              />
          </div>
          <div className="CreatePost-row">
            <label className="CreatePost-label" htmlFor="video">Video:</label>
            <ReactFilestack
              apikey={'AZ45hfpwETTj65u9skqdFz'}
              options={{
                accept: 'video/*',
                fromSources: ['video'],
                maxFiles: 1,
              }}
              buttonClass="CreatePost-data"
              buttonText="Add video"
              onSuccess={this.handleFile}
              />
          </div>
          <div className="CreatePost-row">
            <input className="CreatePost-cancel-button" type="button" value="Cancel" onClick={(ev) => {
              ev.preventDefault()
              this.props.onSuccess()
              this.props.history.push('/')
          }}/>
            <input className="CreatePost-button" type="submit" value="Create" />
          </div>
        </form>
        {error && (
          <div className="CretePost-error">
            {JSON.stringify(error)}
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.createPost
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (data) => dispatch(createPost(data)),
    onSuccess: () => dispatch(clearCreatePost()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost))
