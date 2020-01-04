import * as types from "../constants";

const countdownTimer = (state = "stopped", action) => {
  switch (action.type) {
    case types.TIMER_START:
      return 900;

    case types.TIMER_STOP:
      return "stopped";

    case types.TIMER_TICK:
      return state - 1;

    default:
      return state;
  }
};

export default countdownTimer;
