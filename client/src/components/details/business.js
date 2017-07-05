import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Business</h3>

      <h4><u>Busines Freedom</u></h4>

      <p>Business freedom Teleport score - {props.freedomScore}</p>
      <p>Freedom from corruption Teleport score - {props.corruptionScore}</p>
      <p>Lack of labor restrictions Teleport score - {props.laborRestrictionsScore}</p>
      <p>Time to open a business Teleport score - {props.openBusinessScore}</p>

      <h4><u>Startups</u></h4>

      <p>Coworking spaces Teleport score - {props.coworkScore}</p>
      <p>Coworking spaces on WorkFrom.co - {props.coworkCount}</p>
      <p>Startup events - {props.startupEvents}</p>
      <p>Total number of startups - {props.totalStartups}</p>
      <p>Meetups groups - {props.meetupsGroups}</p>
      <p>Meetups members - {props.meetupsMembers}</p>
      <p>Number of investors - {props.investorCount}</p>
      <p>Startup climate scene Teleport score - {props.startupClimateScore}</p>
      <p>Venture capital Teleport score - {props.vcScore}</p>
      <p>Number of funding accelerators - {props.acceleratorCount}</p>

      <h4><u>Taxation</u></h4>

      <p>Corporate tax (% of profit) - {props.corporateTax}</p>
      <p>Income tax level Teleport score - {props.incomeTaxScore}</p>
      <p>VAT (sales tax) - {props.vat}</p>

      <h4><u>Job Market</u></h4>

      <p>Unemployment rate - {props.unemployment}</p>
      <p>Startup job availability Teleport score - {props.startupJobScore}</p>
      <p>Startup salary - {props.startupSalary}</p>
    </div>
  );
}
