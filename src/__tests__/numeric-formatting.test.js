import { parseAbbreviatedNumber, commaFormatNumber } from 'utils/numeric-formatting';

describe('parseAbbreviatedNumber', () => {
  it('parses valid abbreviated numbers', () => {
    expect(parseAbbreviatedNumber('250k')).toBe(250000);
    expect(parseAbbreviatedNumber('40k')).toBe(40000); // because of course
    expect(parseAbbreviatedNumber('10m')).toBe(10000000);
    expect(parseAbbreviatedNumber('.5b')).toBe(500000000);
    expect(parseAbbreviatedNumber('44')).toBe(44);
  });

  it('doesn not parse badly formatted numbers', () => {
    expect(parseAbbreviatedNumber('')).toBe(null);
    expect(parseAbbreviatedNumber('foo')).toBe(null);
    expect(parseAbbreviatedNumber('5.b')).toBe(null);
    expect(parseAbbreviatedNumber('5..5')).toBe(null);
    expect(parseAbbreviatedNumber('5j')).toBe(null);
    expect(parseAbbreviatedNumber('40kb')).toBe(null);
  });
});

describe('commaFormatNumber', () => {
  it('formats numbers with commas', () => {
    expect(commaFormatNumber(250000)).toBe('250,000');
    expect(commaFormatNumber(10000000)).toBe('10,000,000');
    expect(commaFormatNumber(500000000)).toBe('500,000,000');
    expect(commaFormatNumber(44)).toBe('44');
  });
});
