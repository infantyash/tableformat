
import axios from 'axios';

const fetchMonitors = async () => {
  const apiKey = 'YOUR_DATADOG_API_KEY';
  const response = await axios.get('https://api.datadoghq.com/api/v1/monitor', {
    headers: {
      'DD-API-KEY': apiKey
    }
  });
  return response.data;
};
