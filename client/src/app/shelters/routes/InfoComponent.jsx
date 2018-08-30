import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export default () => (
  <div>
    <h5>Basic Information</h5>
    <form>
      {/* <div className="row form-group-lg form-group">
        <label className="col-sm-4 col-md-3 control-label">Email</label>
        <div className="col">
          <p className="mb-0">Sheltername@shelter.com</p>
        </div>
      </div>
      <div className="row form-group-lg form-group">
        <label className="col-sm-4 col-md-3 control-label">Organization Name</label>
        <div className="col">
          <input
            type="text"
            name="org_name"
            value="Pet center"
            placeholder="Org Name"
            id="Org_name"
            className="input-lg form-control"
          />
        </div>
      </div>
      <div className="row form-group-lg form-group">
        <label className="col-sm-4 col-md-3 control-label">Phone</label>
        <div className="col">
          <input
            type="tel"
            value="999-999-9999"
            className="form-control input-lg"
            name="phone_number"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="row form-group-lg form-group">
        <label className="col-sm-4 col-md-3 control-label">Address</label>
        <div className="col-sm-8 mb-3 col-md-6">
          <input
            type="address"
            className="form-control"
            id="street"
            aria-describedby="address"
            placeholder="street and apt"
          />
        </div>
        <div className="col-sm-8 offset-sm-4 offset-md-0 pl-3 col-md-3 pl-md-0">
          <input type="zip" className="form-control" id="zip" aria-describedby="zip" placeholder="zip code" />
        </div>
      </div> */}
      <label for="email">Email</label>
      <Input type="text" id="email" name="email" />
      <label for="org">Organization</label>
      <Input type="text" id="org" name="org" />
      <label for="phone">Phone</label>
      <Input type="text" id="phone" name="phone" />
      <label for="address">Address</label>
      <Input type="text" id="address" name="address" />
    </form>
  </div>
);
