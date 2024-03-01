import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { FetchRequest } from "../types/types";

interface RequestContextType {
  fetchRequest: FetchRequest;
  setFetchRequest: Dispatch<SetStateAction<FetchRequest>>;
}

const emptyFetchRequest: FetchRequest = {
  variableIndicator: "||",
  fetchString:'"http://localhost:3001/",{\nmethod: "POST",\nheaders: {\n    "Content-Type": "application/json",\n    "x-rdp-version": "8.1",\n    "x-rdp-clientId": "rdpclient",\n    "x-rdp-userId": "system",\n    "auth-client-id": AUTHID,\n    "auth-client-secret": CLISEC,\n},\nbody: JSON.stringify({\n    "params": {\n        "query": {\n            "filters": {\n                "typesCriterion": [\n                    "tradegrade"\n                ]\n            },\n            "id": "a4a02416-dbcf-4141-b353-3b7d8e172577"\n        },\n        "fields": {\n            "attributes": [\n                "_ALL"\n            ]\n        },\n        "options": {\n            "maxRecords": 100\n        }\n    }\n}\n)\n}',
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
    priority: false,
  },
};

const dummyFetchRequestSetter = "dummy" as unknown as Dispatch<
  SetStateAction<FetchRequest>
>;

const RequestContext = createContext<RequestContextType>({
  fetchRequest: emptyFetchRequest,
  setFetchRequest: dummyFetchRequestSetter,
});
function RequestContextProvider({ children }: any) {
  const [fetchRequest, setFetchRequest] =
    useState<FetchRequest>(emptyFetchRequest);

  return (
    <RequestContext.Provider
      value={{
        fetchRequest,
        setFetchRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
export { RequestContext, RequestContextProvider };
