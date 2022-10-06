import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { stub ,spy} from 'sinon';
describe('Loan EMI details', () => {
  let element;
  let shdRoot;
  let obj ={
    interestRate:40,
    monthlyEMI:100
  }
  beforeEach(async()=>{
    element = await fixture('<loanemi-details ._data=localStorage.setItem("emi",{  interestRate:40,monthlyEMI:100})></loanemi-details>');
    shdRoot = element.shadowRoot;
  })
  afterEach(async()=>{
   element = null;
   shdRoot = null;
  });
  it('Loan Emi Details Renderd', async () => {
    expect(element).to.be.an('HTMLElement');
    
  });

  it("_toBasicDetails check",()=>{
    const save = spy(element,"_toBasicDetails");
    let button = element.shadowRoot.querySelector('.cancel-btn');
    button.click();
    element.updateComplete.then(() => {
    expect(save).to.be.calledOnce;
  });
  })
});
