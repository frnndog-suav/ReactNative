import axios, { AxiosInstance } from "axios";

export class MarketPlaceApuClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL: "",
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketplaceApiClient = new MarketPlaceApuClient().getInstance();
