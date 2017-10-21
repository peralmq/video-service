import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {createPost} from './actions'

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

  handleFile(ev) {
    const reader = new FileReader()
    const file = ev.target.files[0]

    reader.onload = (upload) => {
      this.setState({
        video: {
          data: upload.target.result,
          file: {
            name: file.name,
            type: file.type,
          }
        }
      })
    }

    reader.readAsText(file)
  }

  render() {
    return (
      <div className="CreatePost">
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
            <input
              className="CreatePost-data"
              id="video"
              type="file"
              onChange={this.handleFile}
              />
          </div>
          <input className="CreatePost-button" type="submit" value="Create" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (data) => dispatch(createPost(data))
  }
}

export default connect(null, mapDispatchToProps)(CreatePost)
