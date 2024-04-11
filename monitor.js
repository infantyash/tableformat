
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const monitor = () => {
  const [monitors, setMonitors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.datadoghq.com/api/v1/monitor');
        setMonitors(response.data);
      } catch (error) {
        console.error('Error fetching data from Datadog:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Datadog Monitor Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Type</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {monitors.map((monitor) => (
            <tr key={monitor.id}>
              <td>{monitor.name}</td>
              <td>{monitor.status}</td>
              <td>{monitor.type}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default monitor;
