export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }
    case 'FETCH_TRANSACTION':
      return { ...state, loading: false, transactions: action.payload }
    case 'DELETE_TRANSACTION':
      return { ...state, transactions: state.transactions.filter(transaction => transaction.id !== action.payload) }
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [action.payload, ...state.transactions] }
    default:
      return state
  }
}