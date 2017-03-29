import React from 'react';
import Heading from '../presentation//Heading'
import NavBar from '../presentation/NavBar.js'
import ApplyForm from '../presentation/ApplyForm'

export default function Apply() {


return (
<div>
  <Heading />
  <br />
  <NavBar />
  <br />
  <div className="apply-description">
    <h2 className="apply-h2">Apply to DappFund </h2>
    <p className="apply-text-description">Provide information about your dapp. Users will review this information in order to make investment proposals!</p>
  </div>
  <br/>
  <ApplyForm />
</div>




)



}
