import { FetchParameters } from "../types/types";

function parseRequestString(fetchString: string): FetchParameters | string {
  
  if (fetchString[0] === '"' || fetchString[0] === "'") {
    const resourceArr= fetchString.split(fetchString[0], 1);
    return fetchString[0]
  } else if (fetchString[0] === "{") {
    return fetchString[0]
  } else {
    return "Incorrect resource format: needs to be string or request object";
  }
}

function sendFetchRequest(fetchString: string) {
  let responseString = "";
  fetch(fetchString)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      responseString = data.toString();
    });
  return responseString;
}

export { sendFetchRequest };
