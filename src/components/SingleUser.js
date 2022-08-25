import React from "react";
import { logInUser } from "../actions";

class SingleUser extends React.Component {
  //LOGGING IN USER WITH PASSWORD
  showPassInput = (id) => {
    const { user } = this.props;
    var pass = document.getElementsByClassName("getPass");

    var receivedPass = pass[id - 1].value;
    var storedPass = user.password;

    //CHECKING THE PASSWORD, IF INCORRECT, DISPLAY ALERT MESSAGE
    if (receivedPass === storedPass) {
      this.props.dispatch(logInUser(id));
    } else {
      alert("Wrong Password! Please try again..");
    }
  };

  render() {
    const { user } = this.props;
    const userName = user.username;
    return (
      <div className="singleUserBox">
        <div className="singleuserimgname">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="user"></img>
          <div>{userName.charAt(0).toUpperCase() + userName.slice(1)}</div>
        </div>

        <div className="inputandbuttons">
          <div className="inputField">
            Password : &nbsp;
            <input
              type="password"
              className="getPass"
              placeholder={user.password}></input>
          </div>
          <button
            onClick={() => this.showPassInput(user.id)}
            className="buttonLogIn">
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default SingleUser;
