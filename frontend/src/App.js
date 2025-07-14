import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { fetchDeliveries } from './api';
import DeliveryChart from './components/DeliveryChart';
import DeliveryTable from './components/DeliveryTable';
import FilterPanel from './components/FilterPanel';

function App() {
  const [deliveries, setDeliveries] = useState([]);
  const [filters, setFilters] = useState({});
  const [chart, setChart] = useState([]);

  const loadDeliveries = async () => {
    const res = await fetchDeliveries(filters);
    const data = res.data;

    // Группировка по дате доставки
    const grouped = data.reduce((acc, d) => {
      const date = d.arrival_time.split('T')[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.entries(grouped).map(([date, count]) => ({ date, count }));

    setDeliveries(
      data.map((d) => ({
        ...d,
        vehicle_model: d.vehicle_model?.model_name || '-',
        services: d.services?.map((s) => s.service_name || s) || [],
        status: d.status?.status_name || d.status,
      }))
    );

    setChart(chartData);
  };

  useEffect(() => {
    loadDeliveries();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <FilterPanel filters={filters} setFilters={setFilters} onFilter={loadDeliveries} />
      <DeliveryChart data={chart} />
      <DeliveryTable deliveries={deliveries} />
    </Container>
  );
}

export default App;
