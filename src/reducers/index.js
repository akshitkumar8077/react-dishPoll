import {
  ADD_ALL_USERS,
  ADD_ALL_DISHES,
  LOG_OUT_USER,
  LOG_IN_USER,
  REMOVE_ONE_DISH,
  REMOVE_ALL_DISHES,
  CHANGE_THE_TAB,
  CHANGE_USER_PREFERENCE,
} from "../actions";

const initialUserDishesState = {
  usersList: [],
  dishesList: [],
  isLoggedIn: false,
  currentUserId: 1,
  dishesTabSelected: true,
  userPreferences: [
    {
      1: {
        rank1: 12,
        rank2: 6,
        rank3: 25,
      },
    },
    {
      2: {
        rank1: 6,
        rank2: 19,
        rank3: 4,
      },
    },
    {
      3: {
        rank1: 16,
        rank2: 9,
        rank3: 4,
      },
    },
    {
      4: {
        rank1: 9,
        rank2: 30,
        rank3: 1,
      },
    },
    {
      5: {
        rank1: 1,
        rank2: 12,
        rank3: 6,
      },
    },
  ],
};

export default function dishPoll(state = initialUserDishesState, action) {
  switch (action.type) {
    case ADD_ALL_USERS:
      //   console.log('ACTION', action);
      return {
        ...state,
        usersList: action.allUsers,
      };
    case ADD_ALL_DISHES:
      //   console.log('ACTION', action);
      return {
        ...state,
        dishesList: action.allDishes,
      };
    case LOG_OUT_USER:
      //   console.log('ACTION', action);
      return {
        ...state,
        isLoggedIn: false,
        currentUserId: 0,
        dishesTabSelected: true,
      };
    case LOG_IN_USER:
      //   console.log('ACTION', action);
      return {
        ...state,
        isLoggedIn: true,
        currentUserId: action.userId,
      };
    case REMOVE_ONE_DISH:
      //   console.log('ACTION', action);
      var userid = action.userPosnDish[0];
      var tempUserPreference = initialUserDishesState.userPreferences;
      var values = Object.values(tempUserPreference[userid - 1])[0];
      // REMOVING THAT DISH FROM LOGGED USER'S PREFERRED RANK
      if (action.userPosnDish[1] === 1) {
        values.rank1 = 0;
      } else if (action.userPosnDish[1] === 2) {
        values.rank2 = 0;
      } else {
        values.rank3 = 0;
      }
      return {
        ...state,
        userPreferences: tempUserPreference,
      };
    case REMOVE_ALL_DISHES:
      //   console.log('ACTION', action);
      userid = action.userId;
      tempUserPreference = initialUserDishesState.userPreferences;
      values = Object.values(tempUserPreference[userid - 1])[0];
      values.rank1 = 0;
      values.rank2 = 0;
      values.rank3 = 0;
      return {
        ...state,
        userPreferences: tempUserPreference,
      };
    case CHANGE_THE_TAB:
      //   console.log('ACTION', action);
      return {
        ...state,
        dishesTabSelected: action.val,
      };
    case CHANGE_USER_PREFERENCE:
      // console.log('ACTION', action);

      userid = action.obj.custId;
      tempUserPreference = initialUserDishesState.userPreferences;
      values = Object.values(tempUserPreference[userid - 1])[0];
      // CHECK BEFORE IF DISH IS ALREADY PRESENT IN ANY OTHER RANK
      if (values.rank1 === action.obj.dishId) {
        values.rank1 = 0;
      }
      if (values.rank2 === action.obj.dishId) {
        values.rank2 = 0;
      }
      if (values.rank3 === action.obj.dishId) {
        values.rank3 = 0;
      }
      // CHANGE THE DISH IN USER'S PREFERRED RANK
      if (action.obj.rank === "Rank 1") {
        values.rank1 = action.obj.dishId;
      } else if (action.obj.rank === "Rank 2") {
        values.rank2 = action.obj.dishId;
      } else if (action.obj.rank === "Rank 3") {
        values.rank3 = action.obj.dishId;
      } else if (action.obj.rank === "No Rank") {
        // IF NO RANK THEN MAKE THAT PARTICULAR RANK HOLD 0
        if (values.rank1 === action.obj.dishId) {
          values.rank1 = 0;
        } else if (values.rank2 === action.obj.dishId) {
          values.rank2 = 0;
        } else if (values.rank3 === action.obj.dishId) {
          values.rank3 = 0;
        }
      }
      return {
        ...state,
        userPreferences: tempUserPreference,
      };
    default:
      //   console.log('ACTION', action);
      return state;
  }
}
