import React from "react";
import { logOutUser } from "../actions";

class Header extends React.Component {
  //FOR LOGGING OUT USER
  logoutUser = () => {
    const { currentUserId } = this.props;
    this.props.dispatch(logOutUser(currentUserId));
  };

  render() {
    const { isLoggedIn, currentUserId, allUsers } = this.props;

    //SETTING USERNAME
    var userName;
    for (var i = 0; i < allUsers.length; i++) {
      if (currentUserId === allUsers[i].id) {
        userName = allUsers[i].username;
        break;
      }
    }

    return (
      <div className="headerc">
        {!isLoggedIn ? (
          <div>Dish Poll App</div>
        ) : (
          <div>
            Hi{" "}
            <span className="capitalize">
              {userName.charAt(0).toUpperCase() + userName.slice(1)}
            </span>
            !
          </div>
        )}
        {isLoggedIn ? (
          <button onClick={this.logoutUser} className="logoutButton">
            Logout
          </button>
        ) : null}
      </div>
    );
  }
}

export default Header;
