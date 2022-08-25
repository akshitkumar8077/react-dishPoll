import React from "react";
import SingleDishInPage from "./SingleDishInPage";

class DishesPage extends React.Component {
  render() {
    const { dishesList, userPreferences, currentUserId, dispatch } = this.props;

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

    return (
      <div>
        <div className="dishesPageContainer">
          {dishesList.map((dish, index) => (
            <SingleDishInPage
              dish={dish}
              key={`users-${index}`}
              dispatch={dispatch}
              userPreferences={userPreferences}
              currentUserId={currentUserId}
              dishItemIds={dishItemIds}
            />
          ))}
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default DishesPage;
