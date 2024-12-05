import { JsdtAPI } from '@/lib/sdk/jsdt/Api';

import { setupInterceptors } from '../config/interceptors';

export class ExtendedJsdtAPI extends JsdtAPI<unknown> {
  constructor() {
    super({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      timeout: 10000,
    });

    // Set up interceptors on the instance after creation
    setupInterceptors(this.instance);
  }
}

// Export a single instance
export const apiClient = new ExtendedJsdtAPI();
