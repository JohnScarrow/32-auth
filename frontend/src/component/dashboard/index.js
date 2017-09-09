import React from 'react';
import {connect} from 'react-redux';
import UserForm from '../user-form';
import * as util from '../../lib/util.js';
import * as userActions from '../../action/user-actions.js';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.userFetch();
  }

  render() {
    return (
      <div className='dashboard'>
        <h2>Todo App</h2>
        <UserForm
          onComplete={this.props.userCreate}
          buttonText='create user' />

        {this.props.user.map( user =>
          <div key={user._id}>
            <p>{user.title}</p>
            <button onClick={() => this.props.userDelete(user)}>x</button>
          </div>
        )}
      </div>
    )
  }
}

let mapStateToProps = (state) => ({ user: state.user });
let mapDispatchToProps = (dispatch) => ({
  userCreate: (user) => dispatch(userActions.userCreateRequest(user)),
  userDelete: (user) => dispatch(userActions.userDeleteRequest(user)),
  userFetch: () => dispatch(userActions.userFetchRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
