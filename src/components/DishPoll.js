import React from "react";
import SingleDishPoll from "./SingleDishPoll";

class DishPolls extends React.Component {
  render() {
    const { dishesList, userPreferences, currentUserId } = this.props;
    var finalArray = [];
    var scoresList = [];
    var rank1List = [];
    var rank2List = [];
    var rank3List = [];

    //SEGGREGATING DISHES RANK-WISE
    for (var i = 0; i < userPreferences.length; i++) {
      var key = Object.values(userPreferences[i])[0];
      rank1List.push(key.rank1);
      rank2List.push(key.rank2);
      rank3List.push(key.rank3);
    }

    //SCORE CALCULATION
    for (i = 0; i < dishesList.length; i++) {
      var rank1count = 0;
      var rank2count = 0;
      var rank3count = 0;

      for (var j = 0; j < rank1List.length; j++) {
        if (dishesList[i].id === rank1List[j]) {
          rank1count = rank1count + 1;
        }
        if (dishesList[i].id === rank2List[j]) {
          rank2count = rank2count + 1;
        }
        if (dishesList[i].id === rank3List[j]) {
          rank3count = rank3count + 1;
        }
      }
      var score = rank1count * 30 + rank2count * 20 + rank3count * 10;
      scoresList.push(score);
    }

    //SORTING OF BOTH THE ARRAYS BASED ON SCORE
    var temp = 0;
    var secondaryDishes = dishesList;
    var tempDishes;
    for (i = 0; i < scoresList.length; i++) {
      for (j = i; j < scoresList.length; j++) {
        if (scoresList[j] > scoresList[i]) {
          temp = scoresList[j];
          scoresList[j] = scoresList[i];
          scoresList[i] = temp;

          tempDishes = secondaryDishes[j];
          secondaryDishes[j] = secondaryDishes[i];
          secondaryDishes[i] = tempDishes;
        }
      }
    }

    //CREATING NEW OBJECT FOR FINAL ARRAY
    for (i = 0; i < scoresList.length; i++) {
      var obj = {
        id: secondaryDishes[i].id,
        dishName: secondaryDishes[i].dishName,
        image: secondaryDishes[i].image,
        score: scoresList[i],
      };
      finalArray.push(obj);
    }

    var exactUserPoll;

    //GETTING KEYS AND VALUES OF LOGGED IN USER'S CHOICE OF DISH
    for (i = 0; i < userPreferences.length; i++) {
      key = Object.keys(userPreferences[i])[0];

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
        <div className="tableHead">
          <div>Dish</div>
          <div style={{ paddingLeft: 40 }}>Dish Name</div>
          <div>Poll Score</div>
        </div>
        <div className="pollListContainer">
          {finalArray.map((dish, index) => (
            <SingleDishPoll
              dish={dish}
              key={`users-${index}`}
              dispatch={this.props.dispatch}
              finalArray={finalArray}
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

export default DishPolls;
