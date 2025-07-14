import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from '@mui/material';

export default function DeliveryTable({ deliveries }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Список доставок</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Дата отправки</TableCell>
              <TableCell>Дата доставки</TableCell>
              <TableCell>Модель</TableCell>
              <TableCell>Номер</TableCell>
              <TableCell>Услуги</TableCell>
              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deliveries.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.departure_time}</TableCell>
                <TableCell>{d.arrival_time}</TableCell>
                <TableCell>{d.vehicle_model}</TableCell>
                <TableCell>{d.vehicle_number}</TableCell>
                <TableCell>{d.services.join(', ')}</TableCell>
                <TableCell>{d.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
