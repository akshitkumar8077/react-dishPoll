import React from "react";
import { changeUserPreference } from "../actions";

class SingleDishInPage extends React.Component {
  changeUserPreference = (selectionDetails) => {
    this.props.dispatch(changeUserPreference(selectionDetails));
  };

  render() {
    const { dish, dishItemIds, currentUserId } = this.props;

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
      <div>
        <div className="dishInPageContainer">
          <div>
            <img className="disnInPageImage" src={dish.image} alt="dish"></img>
          </div>
          <div className="titanddes">
            <div className="titleOnly">
              <span style={{ fontWeight: 700 }}>Dish Name : </span>
              {dish.dishName}
            </div>
            <div className="descriptionOnly">{dish.description}</div>
          </div>
          <div className="rankingsSelect">
            <div
              onClick={() =>
                this.changeUserPreference({
                  dishId: dish.id,
                  rank: "No Rank",
                  custId: currentUserId,
                })
              }
              className={`${
                dishRankOfUser === null ? "backgroundSelected1" : ""
              }`}>
              No Rank
            </div>
            <div
              onClick={() =>
                this.changeUserPreference({
                  dishId: dish.id,
                  rank: "Rank 1",
                  custId: currentUserId,
                })
              }
              className={`${
                dishRankOfUser === "Rank 1" ? "backgroundSelected" : ""
              }`}>
              Rank 1
            </div>
            <div
              onClick={() =>
                this.changeUserPreference({
                  dishId: dish.id,
                  rank: "Rank 2",
                  custId: currentUserId,
                })
              }
              className={`${
                dishRankOfUser === "Rank 2" ? "backgroundSelected" : ""
              }`}>
              Rank 2
            </div>
            <div
              onClick={() =>
                this.changeUserPreference({
                  dishId: dish.id,
                  rank: "Rank 3",
                  custId: currentUserId,
                })
              }
              className={`${
                dishRankOfUser === "Rank 3" ? "backgroundSelected" : ""
              }`}>
              Rank 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleDishInPage;
