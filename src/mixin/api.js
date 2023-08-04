let base = 'http://192.168.10.108/servlet/apiM/esg/V1/interfaces/';

function callAPI(apiName, requestBody, requestHeader, method='POST'){
  return new Promise((resolve, reject) => {
    let fetchBody = `requestBody=${JSON.stringify(requestBody.value)}&requestHeader={}`;
    if(requestHeader){
      fetchBody = `requestBody=${JSON.stringify(requestBody.value)}&requestHeader=${JSON.stringify(requestHeader)}`;
    }
    fetch(base + apiName, {
      method: method,
      body: fetchBody,
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((result) => {
      if(result.responseHeader.resultCode === '200'){
        return resolve(result.responseBody);
      }
      return reject(result.responseHeader);
    })
    .catch(err => console.log(err));
  })
};

const APICollection = {
  ESGLogin: ((requestBody) => callAPI('ESGLogin', requestBody)),
  QueryYear: ((requestBody, requestHeader) => callAPI('QueryYear', requestBody, requestHeader)),
  UploadPdf: ((requestBody, requestHeader) => callAPI('UploadPdf', requestBody, requestHeader)),
  // {
  //   "uid":"admin",
  //   "mima":"admin"
  // }
};

function asyncAjax(url,back,async,type,data){

  url = base + url;

  var method={}
  method.url=url
  method.back = back
  method.async = async
  method.type = type
  method.data = data

  //url 路徑
  //back is call back function
  //async 同步/非同步 true or false
  //type post or get

  var sendValue = "";

  if(type == "post"){
      sendValue = data;
  }else{
      type = "get";
  };

  if(!back){
      console.log("missing back function!");
      return;
  };

  if(!async){
      var XML = new XMLHttpRequest();
      XML.onload = function() {
          if(this.readyState == 4 && this.status == 200){
              back(this);
          };
      };
      XML.open(type , base + url + "?" + Math.floor(Math.random()*1000));
      XML.send(sendValue);
  }else{
      var worker = new Worker("../../src/mixin/worker.js");
      worker.postMessage(["asyncAjax",url,type,data]);
      worker.onmessage = function(e){
          back(e);
      };
  };
};

export { APICollection, asyncAjax };
