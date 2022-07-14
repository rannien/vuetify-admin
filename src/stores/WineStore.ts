import WineService from '@/services/WineService';
import { defineStore } from 'pinia';

const wines = await WineService.index();

const useWineStore = defineStore('WineStore', {
  state: () => ({ wines: wines.data }),
});

export default useWineStore;
