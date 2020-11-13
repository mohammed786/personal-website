import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: { name: '', email: '', body: '' },
    }
  }
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    const form = { ...this.state.form }

    const mailToLink = encodeURI(
      `${JSONData.emailid}?subject=Message from - ${form.name ||
        ''}, ${form.email || ''}&body=${form.body || ''}`
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <div>
              <img src={JSONData.AboutImage} alt="" />
            </div>
          </span>
          {/* <p> */}
          {JSONData.AboutContent.map(item => {
            return (
              <div>
                <br />
                {item}
              </div>
            )
          })}
          {/* </p> */}
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={JSONData.WorkImage} alt="" />
          </span>

          {JSONData.WorkContent}
          <br />
          <br />
          {JSONData.InternshipsStartLine}
          <ul>
            {JSONData.InternShips.map(item => {
              return (
                <li>
                  <a href={item.link}>{item.name}</a>
                  <br />
                </li>
              )
            })}
          </ul>
          {JSONData.ProjectsStartLine}
          <ul>
            {JSONData.Projects.map(item => {
              return (
                <li>
                  <a href={item.link}>{item.name}</a>
                  <br />
                </li>
              )
            })}
          </ul>

          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major"> CV </h2>
          {/* <span className="image main">
            <img  />
          </span> */}
          {/* <p> */}
          {JSONData.CVStartLine}
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <a href={JSONData.Resume}>Resume</a>
          </div>
          {/* </p> */}
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={e => this._onFormChange('name', e.target.value)}
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={e => this._onFormChange('email', e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={form.body}
              onChange={e => this._onFormChange('body', e.target.value)}
            ></textarea>
          </div>
          <ul className="actions">
            <li>
              <a target="_top" href={mailToLink}>
                Send Message
              </a>
            </li>
            <li>
              <button onClick={this._resetForm}>Reset </button>
            </li>
          </ul>
          <ul className="icons">
            <li>
              <a href={JSONData.medium} className="icon fa-medium">
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a href={JSONData.github} className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href={JSONData.linkedin} className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href={JSONData.blog} className="icon fa-rss">
                <span className="label">Blog</span>
              </a>
            </li>
          </ul>
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>
      </div>
    )
  }

  _onFormChange = (key, value) => {
    const form = { ...this.state.form }
    form[key] = value
    this.setState({
      form,
    })
  }

  _resetForm = () => {
    this.setState({
      form: { name: '', email: '', body: '' },
    })
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
