import React from 'react';
import {
  Link
} from 'react-router-dom'
import './index.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="idea-board__header">
        <div className="row">
          <Link to="/" className="idea-board__logo">Idea Board</Link>
        </div>
      </div>
    )
  }
}

export default Header;
