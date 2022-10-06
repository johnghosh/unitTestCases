import { html, fixture, expect } from '@open-wc/testing';
import { stub ,spy} from 'sinon';
// import nock from 'nock';
import '../src/Customer/Customer-details.js';



describe('customer details', () => {
  // Write test cases inside this block
  let element;
  let shdRoot;
  //const request = new Request(request)
  beforeEach(async()=>{
    element = await fixture('<customer-details></customer-details>');
    shdRoot = element.shadowRoot;
    //sandbox.stub(element, "submitHandler");
  })
  afterEach(async()=>{
   element = null;
   shdRoot = null;
   //sandbox.restore();
  });
  it("Customer details Renders",()=>{
    expect(element).to.be.an('HTMLElement');
  });
  it("submitHandler function test",async()=>{
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    
    const mindate = new Date(year - 80, month, day);
    const maxdate = new Date(year - 18, month, day);
    const fstVal = element.shadowRoot.querySelector('#first_name');
    const lastNameVal = element.shadowRoot.querySelector('#last_name');
   const dateOfBirth = element.shadowRoot.querySelector('#dateof_birth');
    const email = element.shadowRoot.querySelector('#email');
    const mobileNo = element.shadowRoot.querySelector('#mobile_number');
    const salary = element.shadowRoot.querySelector('#monthly_salary');
    const emi = element.shadowRoot.querySelector('#EMIs_amount');
    const check = element.shadowRoot.querySelector('#terms');
    fstVal.modelValue = "john";
    lastNameVal.modelValue = "ghosh";
    dateOfBirth.modelValue = new Date(maxdate);
    email.modelValue = "john@gmail.com";
    mobileNo.modelValue ="7797553117";
    salary.modelValue =450;
    emi.modelValue =40;
    check.modelValue = true;
     //  let obj ={status:200}
    // let save = stub(element,"submitHandler");
    // const buttonClick = element.shadowRoot.querySelector('#nextbtn');
    // buttonClick.click();
    // save.onFirstCall().returns(obj)
   
    // setTimeout(()=>{
    //   expect(save).to.be.equal(obj)
    // },1000)
    let myFunctionStub = stub(window,"fetch");
    //myFunctionStub.onFirstCall().returns(obj)
    element.requestUpdate();
    await element.updateComplete;
    element.shadowRoot.querySelector('#nextbtn').click();
    expect(myFunctionStub).to.have.callCount(1);
    //  expect(myFunctionStub).to.have.callCount(1);
  })
  it("_toEmidetails function check",async()=>{
    const save = spy(element,"_toEmidetails");
    element.requestUpdate();
    await element.updateComplete;
    let button = element.shadowRoot.querySelector('.backbg-btn-color');
    button.click();
    expect(save).to.be.calledOnce;
  });
});
