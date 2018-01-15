import React from 'react';
import './index.scss';

class SubHeader extends React.Component {
  render() {
    return (
      <div className="idea-board__sub-header">
        <div className="idea-board__sub-header__left">
          <label>Ordenar por:</label>
          <select>
            <option value="recents">Recentes</option>
            <option value="like+">Mais likes</option>
            <option value="like-">Menos Likes</option>
          </select>
        </div>
        <div className="idea-board__sub-header__right">
          <button>Nova Ideia</button>
        </div>
      </div>
    )
  }
}

export default SubHeader;
