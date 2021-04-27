import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useStore } from 'store';
import { parseAbbreviatedNumber } from 'utils/numeric-formatting';

/*
simple input page: uses a store hook to pull a number update action out of the
store context and update the number property in response to a button click, and
uses the history store from React Router to navigate to the output page. minimal
internal state managed with a React state hook.
*/
const InPage = () => {
  const { actions: { setNumber } } = useStore();
  const [numberState, setNumberState] = useState('');
  const history = useHistory();

  const handleButtonClick = () => {
    // this parsing is a candidate for something that might make more sense in
    // the store; it's not really interactive, compositional, or navigational
    // which makes me question whether the page should really know about this
    // at all. leaving it here for expedience.
    setNumber(parseAbbreviatedNumber(numberState));
    history.push('/out');
  };

  return (
    <div>
      <p>
        Input a number below. Accepted format is a leading numeric portion
        (decimal places allowed) and an option single-letter suffix for
        thousands, millions, or billions (case insensitive). Examples: 250k,
        10m, .5b, 35, 0.8k
      </p>
      <input onChange={(e) => setNumberState(e.target.value)} />
      <button type="button" onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default InPage;
