import { expect } from 'chai';
import 'mocha';
import * as index from '../src/index';

describe('Initial tests', () => {
  it('checking the tests are working 1', () => {
    const val = index.test1();
    expect(val).to.equal(true);
  });

  it('checking the tests are working 2', () => {
    const val = index.test2();
    expect(val).to.equal(false);
  });
});
