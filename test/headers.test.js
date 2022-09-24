import { html, fixture, expect } from '@open-wc/testing';
import { stub ,spy} from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  let element;
  let shdRoot;
  beforeEach(async()=>{
    element = await fixture('<loan-header></loan-header>');
    shdRoot = element.shadowRoot;
  })
  afterEach(async()=>{
   element = null;
   shdRoot = null;
  });
  it("Customer details Renders",()=>{
    expect(element).to.be.an('HTMLElement');
  });
  it("localeChanged function check",()=>{
    const save = stub(element,"localeChanged");
    let arr= 'en-GB'
    save.onFirstCall().returns('en-GB')
    expect(element.localeChanged()).to.be.equal(arr);
  });
  // Write test cases inside this block
});
