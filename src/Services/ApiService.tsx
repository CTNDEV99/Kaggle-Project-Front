// apiService.ts
import axios, { AxiosResponse } from 'axios';

const baseURL = 'http://localhost:3100/api/tesla';

const api = axios.create({
  baseURL,
});

export const ApiService = {
    async getKpi(data:any): Promise<any> {
        try {
          const response: AxiosResponse<any> = await api.post('/kpi', data);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    async intDate(): Promise<any> {
        try {
          const response: AxiosResponse<any> = await api.get('/int');
          return response.data;
        } catch (error) {
          throw error;
        }
      }
}