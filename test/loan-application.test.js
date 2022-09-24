import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  import { html, fixture, expect } from '@open-wc/testing';
import '../loan-application.js';
import { stub ,spy} from 'sinon';
describe('LoanApplication', () => {
  let element;
  let shdRoot;
  beforeEach(async()=>{
    element = await fixture('<loan-application></loan-application>');
    shdRoot = element.shadowRoot;
  })
  afterEach(async()=>{
   element = null;
   shdRoot = null;
  });
  it("Customer details Renders",()=>{
    expect(element).to.be.an('HTMLElement');
  });
  it("Check Increment function",()=>{
    const check = stub(element,"__increment");
    let counter = 5;
    let incretment = counter+1
    check.onFirstCall().returns(6)
    expect(element.__increment()).to.be.equal(incretment);
  });
  it("called __increment function",()=>{
    const spyFunc = spy(element,"__increment");
    element.__increment();
    expect(spyFunc.calledOnce).to.be.true;
  })
  // Write test cases inside this block
});
});
