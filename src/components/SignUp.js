import React from 'react'

export default function SignUp() {
  return (
    <div className="row gx-0">
      <div className="d-none d-lg-flex col-lg-4 bg-sidebar"></div>

      <div className="col-lg-8 bg-content overflow-hidden">
        <div className="row gs-0 p-5">
          <div className="col-lg-9">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Register to use our banking services</h4>
                <h6 className="card-subtitle text-muted">Please enter your details with appropriate requirement so that our representative can contact you.</h6><br/>
                <form>
                  <div className="row">
                    <label htmlFor="firstname" className="col-form-label col-lg-3">Name</label>
                    <div className="col-4 col-lg-3">
                      <input className="form-control" type="text" id="firstname" name="firstname" placeholder="First Name" />
                    </div>
                    <div className="col-4 col-lg-3">
                      <input className="form-control" type="text" id="middlename" name="middlename" placeholder="Middle Name" />
                    </div>
                    <div className="col-4 col-lg-3">
                      <input className="form-control" type="text" id="lastname" name="lastname" placeholder="Last Name" />
                    </div>
                  </div>

                  <div className="row mt-4">
                    <label htmlFor="email" className="col-form-label col-lg-3">Email-ID</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="email" id="email" name="email" placeholder="name@example.com" />
                      <div id='contactText' className='form-text'>
                        We will never share your e-mail to anyone without your consent.
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <label htmlFor="contact" className="col-form-label col-lg-3">Contact Number</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="text" id="contact" name="contact" placeholder="Contact Number" />
                    </div>
                  </div>

                  <div className="row mt-4">
                    <label htmlFor="requirement" className="col-form-label col-lg-3">Requirement</label>
                    <div className="col-lg-9">
                      <select className="form-select" id="contact" name="contact">
                        <option selected value="account">Open a new account</option>
                        <option value="block">Block your Debit/Credit card</option>
                        <option value="cheque">Request for a cheque book</option>
                        <option value="netbanking">Register for NetBanking</option>
                        <option value="close">Close your account</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <label className="col-lg-3">Preferred mode of contact</label>
                    <div className="col-lg-9">
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" id="telcheck" name="telcheck"/>
                        <label className="form-check-label" htmlFor="telcheck">Call/SMS</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" id="mailcheck" name="mailcheck"/>
                        <label className="form-check-label" htmlFor="mailcheck">E-mail</label>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="offset-lg-3 col-lg-9">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Want to talk with us? Call now!</h5>
                <p className="card-text"><a href="mailto:support@ourbank.com">Click here</a> to send us a mail or call us now on the below numbers.
                  <ul>
                    <li>1800-000-0000 (Toll-free, 24/7)</li>
                    <li>+91 9876543210 (India toll)</li>
                  </ul>
                  Our phone lines are open 09:00 to 18:00 (Mon to Fri)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
