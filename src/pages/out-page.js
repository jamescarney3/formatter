import React from 'react';

import { useStore } from 'store';
import { commaFormatNumber } from 'utils/numeric-formatting';

/*
simple output page: shows the stored number in a nicer, more human-readable
format.
*/
const OutPage = () => {
  const { number } = useStore();

  const renderNumber = () => {
    if (!number) return (<span>(no number stored)</span>);
    // seems slightly more reasonable to use this formatting operation in this
    // page than the parsing operation in the input page (since the 'number'
    // property in our store context is rightfully raw numeric data), but the
    // argument could be made that the store could usefully include some
    // pre-formatted accessor methods especially if this case came up in more
    // than a couple of places.
    return (<span>{commaFormatNumber(number)}</span>);
  };

  return (<p>Stored number: {renderNumber()}</p>);
};

export default OutPage;
