import {compute} from './compute';

describe('tests for compute', () => {
  it('it should return 0 if passed negative no', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('it should add 1 if passed positive no', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
