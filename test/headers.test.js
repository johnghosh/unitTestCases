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
  it("localeChanged function check for nl-NL",async()=>{
    element.shadowRoot.querySelector('#nl-NL').click();
    let cls = element.shadowRoot.querySelector('.en-GB');
     
    let chkClass =cls.classList.contains('btn-cursor')
    expect(chkClass).to.be.equal(true);
  });
  it("localeChanged function check for en-GB",async()=>{
    element.shadowRoot.querySelector('#en-GB').click();
    let cls = element.shadowRoot.querySelector('.nl-NL');
     
    let chkClass =cls.classList.contains('btn-cursor')
    expect(chkClass).to.be.equal(true);
  });
  // Write test cases inside this block
});
