import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TaskList.css';

class TaskList extends Component{
  render() {
    return (
      <ul className='task-list'>
        <li>Список</li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.taskList.tasks,
  }
}

export default connect(mapStateToProps, null)(TaskList);