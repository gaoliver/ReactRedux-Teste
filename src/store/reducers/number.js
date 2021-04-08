const initialState = {
    number: 0,
}

export default function number(state = initialState, action) {
    if (action.type === 'AUMENTAR') {
        return {
            number: state.number+1
        }
    } else if (action.type === 'DIMINUIR') {
        return {
            number: state.number-1
        }
    }

    return state
}