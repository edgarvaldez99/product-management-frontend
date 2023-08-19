export interface SignalRequest {
  signal?: AbortSignal;
}

export interface ListRequest extends SignalRequest {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
}
