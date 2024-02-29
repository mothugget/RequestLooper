import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { FetchRequest } from "../types/types";

interface RequestContextType {
  fetchRequest: FetchRequest;
  setFetchRequest: Dispatch<SetStateAction<FetchRequest>>;

}

const emptyFetchRequest:FetchRequest={
  variableIndicator:'||',
  fetchString: '',
  showOptions: {
    resource: false,
    method: false,
    headers: false,
    body: false,
    mode: false,
    credentials: false,
    cache: false,
    redirect: false,
    referrer: false,
    referrerPolicy: false,
    integrity: false,
    keepalive: false,
    signal: false,
    priority: false
  }
}

const dummyFetchRequestSetter = 'dummy' as unknown as Dispatch<SetStateAction<FetchRequest>>

const RequestContext = createContext<RequestContextType>({
  fetchRequest: emptyFetchRequest ,
  setFetchRequest: dummyFetchRequestSetter,
});
function RequestContextProvider({ children }: any) {
  const [fetchRequest, setFetchRequest] = useState<FetchRequest>(emptyFetchRequest);
 
  return (
    <RequestContext.Provider
      value={{
fetchRequest,
setFetchRequest
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
export { RequestContext, RequestContextProvider };
