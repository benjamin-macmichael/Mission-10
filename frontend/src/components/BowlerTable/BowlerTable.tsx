import { Bowler } from '../../types/Bowler';
import { useState, useEffect } from 'react';

function BowlerTable() {
  // State to store bowler data
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  // Fetch bowler data from API on component mount
  useEffect(() => {
    const fetchBowlerData = async () => {
      try {
        // Fetch bowler data from the API
        const rsp = await fetch('https://localhost:44308/bowler');
        // Parse the response as JSON
        const b = await rsp.json();
        // Update state with fetched bowler data
        setBowlerData(b);
      } catch (error) {
        console.error('Error fetching bowler data:', error);
      }
    };
    fetchBowlerData();
  }, []);

  return (
    <div className="container card">
      <div className="row">
        {/* Heading for the table */}
        <h4 className="text-center">Bowlers</h4>
      </div>
      <table className="table table-info table-bordered thead-dark">
        <thead>
          <tr>
            {/* Table headers */}
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {/* Filter down to Marlins and Sharks and Map through bowlerData to render table rows */}
          {bowlerData
            .filter(
              (b) =>
                b.team.teamName === 'Marlins' || b.team.teamName === 'Sharks',
            )
            .map((b) => (
              <tr key={b.bowlerID}>
                {/* Table data for each bowler */}
                <td>{b.bowlerFirstName}</td>
                <td>{b.bowlerMiddleInit}</td>
                <td>{b.bowlerLastName}</td>
                <td>{b.team.teamName}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlerTable;
