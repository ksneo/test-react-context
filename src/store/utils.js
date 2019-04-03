// @flow
function handleActions<S>(handlersProvider, defaultState: S) {
  let types = {};

  const convertAndSave = (...actionTypes) => {
    const joinedActions = actionTypes.join(' ');

    types = {
      ...types,
      ...actionTypes.reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: joinedActions,
        }),
        {}
      ),
    };

    return joinedActions;
  };

  const handlers = typeof handlersProvider === 'function' ? handlersProvider(convertAndSave) : handlersProvider;

  return (state: S = defaultState, action: Action<*>) => {
    let handler;
    if (action) {
      const actionType = types[action.type] || action.type;
      handler = action ? handlers[actionType] : null;
    }

    return typeof handler === 'function' ? handler(state, action) : state;
  };
}

export { handleActions };