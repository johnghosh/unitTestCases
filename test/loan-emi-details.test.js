import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { stub ,spy} from 'sinon';
describe('Loan EMI details', () => {
  let element;
  let shdRoot;
  // let obj ={
  //   interestRate:40,
  //   monthlyEMI:100
  // }
  beforeEach(async()=>{
    //const data = localStorage.setItem("emi",obj);
    element = await fixture('<loanemi-details ._data=${localStorage.setItem("emi",{  interestRate:40,monthlyEMI:100})}></loanemi-details>');
    shdRoot = element.shadowRoot;
  })
  afterEach(async()=>{
   element = null;
   shdRoot = null;
  });
  it('Loan Emi Details Renderd', async () => {
    expect(element).to.be.an('HTMLElement');
    
  });
  // it("called _toBasicDetails function",()=>{
  //   const spyFunc = spy(element,"_toBasicDetails");
  //   element._toBasicDetails();
  //   expect(spyFunc.calledOnce).to.be.true;
  // })
  // Write test cases inside this block

  it("_toBasicDetails check",()=>{
    const save = spy(element,"_toBasicDetails");
    let button = element.shadowRoot.querySelector('.cancel-btn');
    button.click();
    element.updateComplete.then(() => {
    expect(save).to.be.calledOnce;
  });
  })
});
