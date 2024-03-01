

function parseRequestString

function sendFetchRequest(fetchString:string){
    let responseString=''
    fetch(fetchString).then(res => {
        return res.json();
    })
        .then(data => {
            console.log(data);
            responseString=data.toString();
        })
        return responseString
    }

export {sendFetchRequest}