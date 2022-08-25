import React from "react";

class SingleDishPoll extends React.Component {
  render() {
    const { dish, dishItemIds } = this.props;

    // SELECTING WHICH ITEM HAS BEEN RANKED BY THE USER
    var dishRankOfUser;
    if (dish.id === dishItemIds[0]) {
      dishRankOfUser = "Rank 1";
    } else if (dish.id === dishItemIds[1]) {
      dishRankOfUser = "Rank 2";
    } else if (dish.id === dishItemIds[2]) {
      dishRankOfUser = "Rank 3";
    } else {
      dishRankOfUser = null;
    }

    return (
      <div className="singleRowDish">
        <div className="singleRowDishDetails">
          <div>
            <img alt="dish" src={dish.image} className="pollImage"></img>
          </div>
          <div>{dish.dishName}</div>
          <div>{dish.score}</div>
        </div>
        {dishRankOfUser !== null ? (
          <div className="yourPollRank">Your Poll : {dishRankOfUser}</div>
        ) : null}
        <div></div>
      </div>
    );
  }
}

export default SingleDishPoll;
