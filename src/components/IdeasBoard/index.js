import React from 'react';
import IdeaCard from '../IdeaCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as IdeasActions from '../../actions/IdeasActions';
import PropTypes from 'prop-types';
import './index.scss';

class IdeasBoard extends React.Component {
  componentWillMount() {
    this.props.IdeasActions.fetchIdeas();
  }

  renderData(item, index) {
    return <IdeaCard key={index} />;
  }

  render() {
    if(!this.props.ideas){
      return (
        <div>
          Loading ideias...
        </div>
      )
    } else {
      return (
        <div>
          {
            this.props.ideas.map((item, index) => {
              return (
                this.renderData(item, index)
              );
            })
          }
        </div>
      )
    }
  }
}

IdeasBoard.propTypes = {
    IdeasActions: PropTypes.object,
    ideas: PropTypes.array
};

function mapStateToProps(state) {
    return {
        ideas: state.ideas
    };
}

function mapDispatchToProps(dispatch) {
    return {
       IdeasActions: bindActionCreators(IdeasActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IdeasBoard);
