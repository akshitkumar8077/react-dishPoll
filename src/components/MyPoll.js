import React from "react";
import { removeOneDish, removeAllDishes } from "../actions";

class MyPoll extends React.Component {
  //TO DELETE A SINGLE ITEM FROM THE USER SELECTION
  deleteSingleItem = (userPosnDish) => {
    this.props.dispatch(removeOneDish(userPosnDish));
  };

  //TO DELETE ALL THE SELECTED ITEMS OF THE USER
  deleteAllItems = (userId) => {
    this.props.dispatch(removeAllDishes(userId));
  };

  render() {
    const { userPreferences, currentUserId, dishesList } = this.props;
    var exactUserPoll;

    //GETTING KEYS AND VALUES OF LOGGED IN USER'S CHOICE OF DISH
    for (var i = 0; i < userPreferences.length; i++) {
      var key = Object.keys(userPreferences[i])[0];

      if (currentUserId === parseInt(key)) {
        var pollObject = userPreferences[i];
        exactUserPoll = Object.values(pollObject)[0];
        break;
      }
    }

    //STORING THE DISH CHOICES OF CURRENT USER
    var dishItemIds = [
      exactUserPoll.rank1,
      exactUserPoll.rank2,
      exactUserPoll.rank3,
    ];
    var dishItemNames = ["", "", ""];
    i = 0;
    while (i < dishesList.length) {
      if (dishItemIds[0] === dishesList[i].id) {
        dishItemNames[0] = dishesList[i].dishName;
      }
      if (dishItemIds[1] === dishesList[i].id) {
        dishItemNames[1] = dishesList[i].dishName;
      }
      if (dishItemIds[2] === dishesList[i].id) {
        dishItemNames[2] = dishesList[i].dishName;
      }
      i++;
    }

    return (
      <div className="yourPollsDiv">
        <div className="yourpollstext">Your Polls</div>
        <div className="actualPolls">
          <div className="rankdiv">
            <div className="rank">Rank 1 :&nbsp;</div>
            <div className="itemnclear">
              {dishItemNames[0] !== "" ? (
                <div className="yesDishName">{dishItemNames[0]}</div>
              ) : (
                <div className="noDishName">Select a Dish</div>
              )}
              <button
                className="clearOne"
                onClick={() => this.deleteSingleItem([currentUserId, 1])}>
                Clear
              </button>
            </div>
          </div>

          <div className="rankdiv">
            <div className="rank">Rank 2 :&nbsp;</div>
            <div className="itemnclear">
              {dishItemNames[1] !== "" ? (
                <div className="yesDishName">{dishItemNames[1]}</div>
              ) : (
                <div className="noDishName">Select a Dish</div>
              )}
              <button
                className="clearOne"
                onClick={() => this.deleteSingleItem([currentUserId, 2])}>
                Clear
              </button>
            </div>
          </div>

          <div className="rankdiv">
            <div className="rank">Rank 3 :&nbsp;</div>
            <div className="itemnclear">
              {dishItemNames[2] !== "" ? (
                <div className="yesDishName">{dishItemNames[2]}</div>
              ) : (
                <div className="noDishName">Select a Dish</div>
              )}
              <button
                className="clearOne"
                onClick={() => this.deleteSingleItem([currentUserId, 3])}>
                Clear
              </button>
            </div>
          </div>

          <div className="clearbuttondiv">
            <button
              className="clearAllButton"
              onClick={() => this.deleteAllItems(currentUserId)}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPoll;
