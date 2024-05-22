import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://services.it-cron.ru/api',
  timeout: 10000,
  headers: { Accept: 'text/plain', 'Accept-language': 'ru' },
})
