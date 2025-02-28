import axios from 'axios';

const obterEndpointApi = () => {
  if (!import.meta.env.VITE_API_BASE_URL) {
    throw new Error('Não é possível realizar requisições. Endpoint da API não está configurado.');
  }

  return import.meta.env.VITE_API_BASE_URL;
};

const instanciaAxios = axios.create({
  baseURL: obterEndpointApi(),
  responseType: 'json',
  headers: {
    Accept: 'application/json',
  },
});

export default instanciaAxios;
