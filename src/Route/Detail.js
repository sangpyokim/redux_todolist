import React from 'react'
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { actionCreators } from '../Store';

const Detail = ({ toDos, onBtnClick }) => {
    return(
        <div>
            <h1>ToDo</h1>
            <h2>{toDos?.text}</h2>
            <Link to="/">
                <button onClick={onBtnClick}>DEL</button>
            </Link>
            <Link to="/">
                <button>BACK</button>
            </Link>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const {match: {params: {id}}} = ownProps
    return {toDos: state.find( state => state.id === parseInt(id))}
}

function mapDispatchToProps(dispatch, ownProps) {
    const {match: {params: {id}}} = ownProps
    return {
      onBtnClick: () => dispatch(actionCreators.deleteToDo(id))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Detail);