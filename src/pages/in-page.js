import React, { useState } from 'react';

import { useStore } from 'store';
import { parseAbbreviatedNumber } from 'utils/numeric-formatting';


const InPage = () => {
  const { actions: { setNumber } } = useStore();

  const [numberState, setNumberState] = useState('');

  const handleButtonClick = () => {
    setNumber(parseAbbreviatedNumber(numberState));
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
