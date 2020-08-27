import { useState } from 'react';
import _ from 'lodash';

export function useMemoStateErq (value)  {
  
    console.log(typeof value);
  
  const [state, setState] = useState(value);
  
  console.log('render memoState');

  const newState = (newState) => {

    console.log(!_.isEqual(newState, state));

    if (!_.isEqual(newState, state)) {
        setState(newState)
        console.log('Nowy state: ', newState);

    }
  };

  return [state, newState];
};


export default useMemoStateErq;