interface LoopData {
  variables: string[];
  loopArray: string[][];
}

interface ShowOptions {
  resource: boolean;
  method: boolean;
  headers: boolean;
  body: boolean;
  mode: boolean;
  credentials: boolean;
  cache: boolean;
  redirect: boolean;
  referrer: boolean;
  referrerPolicy: boolean;
  integrity: boolean;
  keepalive: boolean;
  signal: boolean;
  priority: boolean;
}

interface FetchParameters {
  resource: RequestInfo;
  options?: RequestInit | undefined;
}

interface FetchRequest {
  fetchParameters: FetchParameters;
  variableIndicator: string;
  showOptions: ShowOptions;
}

export type { LoopData, FetchRequest, ShowOptions, FetchParameters };
