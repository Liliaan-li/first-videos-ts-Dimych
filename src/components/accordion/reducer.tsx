type ActionType={
    type: string
}
export type StateType={
    collapsed:boolean
}
export const reducer = (state: StateType, action: ActionType)=>{
    switch (action.type){
        case "collapsed": return {...state, collapsed:!state.collapsed}
        default: return state
    }

    return state;
}
