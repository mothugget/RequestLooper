import { FetchParameters } from "../types/types";

function parseRequestString(fetchString: string): FetchParameters | string {
  const requestArr = fetchString.split("");
  const firstComma = requestArr.indexOf(",");
  if (firstComma === -1)
    return "Sorry, your request seems to be in a format not currently supported";
  const resource = requestArr.splice(0, firstComma).join("");
  requestArr.shift();
  const options = requestArr.join("");
  console.log(options);
  return "hj";
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

export { sendFetchRequest, parseRequestString };
