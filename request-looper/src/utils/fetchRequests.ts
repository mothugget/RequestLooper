import { FetchParameters, FetchRequest } from "../types/types";

function sendFetchRequest(fetchRequest: FetchRequest) {
  let responseString = "";
  console.log(fetchRequest.fetchParameters.options);
  fetch(fetchRequest.fetchParameters.resource, fetchRequest.fetchParameters.options)
    .then((res) => {
      return res.json() ;
    })
    .then((data) => {
      console.log(data);
      responseString = data.toString();
    });
  return responseString;
}

export { sendFetchRequest };
