import { Paper, TextField, Box, Button } from '@mui/material';

export default function FilterPanel({ filters, setFilters, onFilter }) {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          type="date"
          label="С даты"
          InputLabelProps={{ shrink: true }}
          value={filters.arrival_date_after || ''}
          onChange={(e) => setFilters({ ...filters, arrival_date_after: e.target.value })}
        />
        <TextField
          type="date"
          label="По дату"
          InputLabelProps={{ shrink: true }}
          value={filters.arrival_date_before || ''}
          onChange={(e) => setFilters({ ...filters, arrival_date_before: e.target.value })}
        />
        <Button variant="contained" onClick={onFilter}>Фильтровать</Button>
      </Box>
    </Paper>
  );
}
