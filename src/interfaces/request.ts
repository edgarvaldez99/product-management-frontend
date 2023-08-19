export interface SignalRequest {
  signal?: AbortSignal;
}

export interface ListRequest extends SignalRequest {
  params?: Record<string, string>;
}
