import React from 'react';
import IdeaCard from '../IdeaCard';
import './index.scss';

class IdeasBoard extends React.Component {
  getIdeias() {
    const ideas = [1,2,3,4,5,6,7,8,9,0].map((number) =>
      <IdeaCard key={number} />
    );
    return ideas
  }

  render() {
    return (
      <div>
        {this.getIdeias()}
      </div>
    )
  }
}

export default IdeasBoard;
