import AxiosInstance from "./AxiosInstance"

export const memoryService = {
  getAll: async() => {
    const res =  await AxiosInstance.get('/memories')
    return res;
  },
  createMemory: async(body) => {
    const res = await AxiosInstance.post('/memories', body);
    return res;
  }
}