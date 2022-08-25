import React from "react";
import SingleUser from "./SingleUser";

class Login extends React.Component {
  render() {
    const { usersList } = this.props;
    return (
      <div className="loginAll">
        <div className="logText">Log In As</div>
        <div className="loginUsersList">
          {usersList.map((user, index) => (
            <SingleUser
              user={user}
              key={`users-${index}`}
              dispatch={this.props.dispatch}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Login;
