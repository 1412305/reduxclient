const session = (state = 'anonymous', action) => {
    switch (action.type){
        case 'ADD_SESSION':
            return action.username
        default:
            return state
    }
}

export default session