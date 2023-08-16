import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080'

const axiosConfig = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    },
    responseType: 'blob'
  })

export const generateReport = async (sampleId: string) => (await axiosConfig.get("/api/print?sampleId=" + sampleId)).data
