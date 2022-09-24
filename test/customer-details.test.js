import { html, fixture, expect } from '@open-wc/testing';
import { stub ,spy} from 'sinon';
// import nock from 'nock';
import '../src/Customer/Customer-details.js';


describe('customer details', () => {
  // Write test cases inside this block
  let element;
  let shdRoot;
  let base = "https://loanfeapi.herokuapp.com";
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
  it("_toEmidetails function test",()=>{
    // element.submitHandler();
    // sandbox.assert.calledOnce(lement.submitHandler);


    let save = stub(element,"_toEmidetails");
    let result = '';
    save.onFirstCall().returns(result);
    // save.restore();
    // assert.calledWith(save,result)
  })
  it("_toEmidetails function check",()=>{
    // element.submitHandler();
    // sandbox.assert.calledOnce(lement.submitHandler);


    const save = spy(element,"_toEmidetails");
    element._toEmidetails();
    expect(save.calledOnce).to.be.true;
    // save.restore();
    // assert.calledWith(save,result)
  });
  // it('should return the movie that was added', (done) => {
  //   const options = {
  //     method: 'post',
  //     body: {
  //     },
  //     json: true,
  //     url: `${base}/submit-form`
  //   };
  //   request(options, (err, res, body) => {
  //     res.statusCode.should.equal(200);
  //     res.headers['content-type'].should.contain('application/json');
  //     body.status.should.eql('success');
  //     done();
  //   });
  // });
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
