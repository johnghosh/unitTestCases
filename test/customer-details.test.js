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
  it("submitHandler function test",()=>{
    let save = stub(element,"submitHandler");
    let result = '';
    let data = {}
    save.withArgs(data).returns(result);
    expect(element.submitHandler(data)).to.be.equal('')
  })
  it("_toEmidetails function check",()=>{
    const save = spy(element,"_toEmidetails");
    let button = element.shadowRoot.querySelector('.backbg-btn-color');
    button.click();
    element.updateComplete.then(() => {
    expect(save).to.be.calledOnce;
  });
    // save.restore();
    // assert.calledWith(save,result)
  });
  // it("Mock and stub api call", (done) =>{
  //   var obj = { id: 123 };
  //   const scope = nock("https://loanfeapi.herokuapp.com")
  //     .post("/submit-form")
  //     .reply(200, obj);
  //     element
  //     .submitHandler()
  //     .then((result)=> {
  //       expect(result).to.be.eql(obj);
  //       done();
  //     })
  //     .catch(error => {
  //       done(new Error("test case failed: " + error));
  //     });
  // });
});

