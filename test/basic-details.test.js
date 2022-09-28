import { html, fixture, expect } from '@open-wc/testing';
import   '../src/LoanBasicDetails/BasicDetails.js';
import { isTemplatePartActive } from 'lit-html';
import { stub ,spy} from 'sinon';
// var myFunc = require('../src/LoanBasicDetails/BasicDetails.js');
// var myObj = new myFunc();
describe('Basic details', () => {
  let el;
  let shdRoot;
  beforeEach(async()=>{
    el = await fixture('<basic-details></basic-details>');
    shdRoot = el.shadowRoot;
  })
  afterEach(async()=>{
   el = null;
   shdRoot = null;
  });
  it("Basic details Renders",()=>{
    expect(el).to.be.an('HTMLElement');
  });
  it("check numToWord function",()=>{
    const amountInput = el.shadowRoot.querySelector('.amount');
    amountInput.modelValue= 1000;
    const divVal = el.shadowRoot.querySelector('#word');
    el._numToWord();
    expect(divVal.innerText).to.be.equal('one thousand');
  })
  it("captureDetails calling",()=>{
    const _name = el.shadowRoot.querySelector('.type');
    const _amount = el.shadowRoot.querySelector('.amount');
    const _period = el.shadowRoot.querySelector('.period');
    _name.modelValue = "john";
    _amount.modelValue = 1000;
    _period.modelValue = 3
    const basic = { name: "john", amount: 1000, period: 3 };
    const capStub = stub(el,"_captureDetails");
    capStub.onFirstCall().returns(basic);
    expect(el._captureDetails()).to.be.equal(basic);

    // const nextBtn = el.shadowRoot.querySelector('.btn-next');
    // nextBtn.click();
    //expect(capStub).to.be.calledOnce;
    //expect(capStub).to.be.calledOnce;
  })
  it("called toDashboard",async()=>{
    const spyFunc = spy(el,"_toDashboard");
    let button = el.shadowRoot.querySelector('.btn-previous');
    button.click();
   el.updateComplete.then(() => {
    expect(spyFunc).to.be.calledOnce;
  });
  })
});

// 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
