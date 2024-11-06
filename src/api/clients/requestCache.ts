import { AxiosRequestConfig } from 'axios';

const pendingRequests = new Map<string, AbortController>();

export const getRequestKey = (config: AxiosRequestConfig): string =>
  `${config.method}:${config.url}`;

export const addPendingRequest = (config: AxiosRequestConfig): void => {
  const requestKey = getRequestKey(config);

  if (!pendingRequests.has(requestKey)) {
    const controller = new AbortController();

    config.signal = controller.signal;
    pendingRequests.set(requestKey, controller);
  } else {
    // Cancel duplicate request
    const controller = pendingRequests.get(requestKey);

    controller?.abort();
  }
};

export const removePendingRequest = (config: AxiosRequestConfig): void => {
  const requestKey = getRequestKey(config);

  pendingRequests.delete(requestKey);
};
