import axios from 'axios';

const API_BASE = 'http://localhost:8000/api';

export const fetchDeliveries = (filters = {}) =>
  axios.get(`${API_BASE}/deliveries/`, { params: filters });

export const fetchServices = () =>
  axios.get(`${API_BASE}/delivery-services/`);
