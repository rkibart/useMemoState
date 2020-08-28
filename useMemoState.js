import { useState } from 'react'
import _cloneDeep from 'lodash/cloneDeep'
import _isEqual from 'lodash/isEqual'



export function useMemoState (initialValue={})  {


    // fired once 
    if(!useMemoState.cache) {
        useMemoState.cache = _cloneDeep(initialValue)
    }

    // fired useState

    const [state, internalSetter] = useState(initialValue)
    
    // setter 

    function setter(newState) {

        if(!_isEqual(useMemoState.cache , newState)) {
            internalSetter(newState)
            useMemoState.cache = _cloneDeep(newState)
        }
    } 
    
    
    return [state, setter]
}


