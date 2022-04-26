import {reducer, StateType} from "./reducer";

test('fv', ()=>{
   const  state: StateType={
      collapsed:true
   }

  const newState =  reducer(state, {type: "collapsed"})

   expect(newState.collapsed).toBe(true)
})