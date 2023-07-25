let api = 'http://192.168.10.108/servlet/apiM/ESG/V1/interfaces/test/test_API';
let data = {
    year: "110"
}

function callAPI(method = 'GET'){
  fetch(api, {
    method: method,
    body: `requestBody=${JSON.stringify(data)}&requestHeader={}`,
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
}

export const testCallAPI = function(){
  callAPI('POST');
}