let validateUser = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: user must have an id');
  }
  if (!payload.title) {
    throw new Error('VALIDATION ERROR: user must have a title');
  }
}

export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
    case 'LIST_SET':
      return payload
    case 'LIST_CREATE':
      validateUser(payload);
      return [payload, ...state]
    case 'LIST_UPDATE':
      validateUser(payload);
      return state.map( item =>
        item._id === payload.id ? payload : item)
    case 'LIST_DELETE':
      validateUser(payload);
      return state.filter( item =>
        item._id !== payload.id)
    default:
      return state;
  }
}
