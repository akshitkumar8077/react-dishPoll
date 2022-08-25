import React from "react";
import MyPoll from "./MyPoll";
import { changeTheTab } from "../actions";
import DishesPage from "./DishesPage";
import DishPoll from "./DishPoll";

class InsideApp extends React.Component {
  changeTab = (val) => {
    this.props.dispatch(changeTheTab(val));
  };
  render() {
    const {
      userPreferences,
      currentUserId,
      dishesList,
      dispatch,
      dishesTabSelected,
    } = this.props;
    return (
      <div>
        <MyPoll
          userPreferences={userPreferences}
          currentUserId={currentUserId}
          dishesList={dishesList}
          dispatch={dispatch}
        />
        <div className="tabs">
          <div
            className={`tab ${!dishesTabSelected ? "" : "selectedTab"}`}
            onClick={() => this.changeTab(true)}>
            Dishes
          </div>
          <div
            className={`tab ${!dishesTabSelected ? "selectedTab" : ""}`}
            onClick={() => this.changeTab(false)}>
            Dish Polls
          </div>
        </div>
        {dishesTabSelected ? (
          <DishesPage
            dishesList={dishesList}
            userPreferences={userPreferences}
            currentUserId={currentUserId}
            dispatch={dispatch}
          />
        ) : (
          <DishPoll
            dishesList={dishesList}
            userPreferences={userPreferences}
            currentUserId={currentUserId}
          />
        )}
      </div>
    );
  }
}

export default InsideApp;
