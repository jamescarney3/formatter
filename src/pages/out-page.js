import React from 'react';

import { useStore } from 'store';
import { commaFormatNumber } from 'utils/numeric-formatting';


const OutPage = () => {
  const { number } = useStore();

  const renderNumber = () => {
    if (!number) return (<span>(no number stored)</span>);
    return (<span>{commaFormatNumber(number)}</span>);
  };

  return (<p>Stored number: {renderNumber()}</p>);
};

export default OutPage;
