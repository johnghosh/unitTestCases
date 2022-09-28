import { html, fixture, expect, assert } from '@open-wc/testing';
 import { stub , spy} from 'sinon';
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
  it("_toHome function check",()=>{
    const save = spy(element,"_toHome");
    let button = element.shadowRoot.querySelector('.home-btn');
    button.click();
    element.updateComplete.then(() => {
    expect(save).to.be.calledOnce;
  });
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
  it("_toHome function check for Error",()=>{
    const save = spy(element,"_toHome");
    let button = element.shadowRoot.querySelector('.home-btn');
    button.click();
    element.updateComplete.then(() => {
    expect(save).to.be.calledOnce;
  });
  });
  // Write test cases inside this block
});

