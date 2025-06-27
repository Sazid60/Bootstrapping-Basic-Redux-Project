

// A Redux middleware function for logging actions and state changes
const logger = (state) => (next) => (action) => {


    // console.log(state.getState());
    // console.log(action)
    // return next(action)

    // Starts a new console group, grouping all logs under the action type name
    // This helps organize logs related to the same action together
    console.group(action.type);

    // Logs the state before the current action is processed
    // console.info is similar to console.log, but semantically used for informational messages
    console.info("Previous State", state.getState());

    // Calls the next middleware or reducer with the current action
    const result = next(action);

    // Logs the state after the action is processed by the reducer
    console.info("Next State", state.getState());

    // Ends the current console group, closing the grouping started above
    console.groupEnd();

    // Returns the result of next(action) — often the same action or a value from thunk middleware
    return result;

    //  This logger helps developers trace how the state changes over time with each action
    //  Useful in development mode for debugging complex state transitions and spotting bugs
}

export default logger;
