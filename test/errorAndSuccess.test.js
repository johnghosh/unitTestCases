import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  let element;
  let shdRoot;
  // Write test cases inside this block

  beforeEach(async()=>{
    element = await fixture('<loan-success></loan-success>');
    shdRoot = element.shadowRoot;
  })
  afterEach(async()=>{
   element = null;
   shdRoot = null;
  });
  it("Customer details Renders",()=>{
    expect(element).to.be.an('HTMLElement');
  });
});

describe('error screen', () => {
  let element;
  let shdRoot;
  // Write test cases inside this block

  beforeEach(async()=>{
    element = await fixture('<loan-error></loan-error>');
    shdRoot = element.shadowRoot;
  })
  afterEach(async()=>{
   element = null;
   shdRoot = null;
  });
  it("Customer details Renders",()=>{
    expect(element).to.be.an('HTMLElement');
  });
  // Write test cases inside this block
});
