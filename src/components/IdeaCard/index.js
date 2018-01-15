import React from 'react';
import './index.scss';

class IdeaCard extends React.Component {
  svgThumbsUp() {
    return (
      <svg height="16" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
      </svg>
    )
  }

  render() {
    return (
      <div className="card-idea">
        <span className="card-idea__header">10/10/2018</span>
        <div className="card-idea__section">
          <h3 className="card-idea__title">Lorem ipsum</h3>
          <p className="card-ideia__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="card-idea__footer">
          <span className="card-idea__like">
            {this.svgThumbsUp()}
            <span>13 likes</span>
          </span>
          <span className="card-idea__edit">edit</span>
        </div>
      </div>
    )
  }
}

export default IdeaCard;
