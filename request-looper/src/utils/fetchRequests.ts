import { FetchParameters, FetchRequest } from "../types/types";

function sendFetchRequest(fetchRequest: FetchRequest) {
  
  return fetch(fetchRequest.fetchParameters.resource, fetchRequest.fetchParameters.options)
    .then((res) => {
      return res.json() ;
    })
    .then((data) => {
      return JSON.stringify(data,null,4);
      
    });
 
}

export { sendFetchRequest };
