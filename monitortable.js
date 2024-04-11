
import React, { useEffect, useState } from 'react';
import fetchmonitors from './api'; // Import the function you created to fetch monitor data

const monitortable = () => {
  const [monitors, setMonitors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchmonitors();
      setMonitors(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Monitors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {monitors.map(monitor => (
            <tr key={monitor.id}>
              <td>{monitor.name}</td>
              <td>{monitor.overall_state}</td>
              <td>{monitor.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default monitortable;
