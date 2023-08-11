import { useUserStore } from '../pinia/user';

const userStore = useUserStore();

let base = 'http://192.168.10.108/servlet/apiM/esg/V1/interfaces/';

function callAPI(apiName, requestBody, method='POST'){
  if(requestBody.value){
    requestBody = requestBody.value;
  }
  return new Promise((resolve, reject) => {
    
    let fetchBody = `requestBody=${ encodeURI( JSON.stringify(requestBody))}&requestHeader=${JSON.stringify(userStore.returnUser())}`;

    if(apiName === 'ESGLogin'){
      fetchBody = `requestBody=${JSON.stringify(requestBody)}&requestHeader={}`;
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
  QueryYear: ((requestBody) => callAPI('QueryYear', requestBody)),
  QueryESGData: ((requestBody) => callAPI('QueryESGData', requestBody)),
  UploadPDF: ((requestBody) => callAPI('UploadPDF', requestBody)),
  GetPDFData: ((requestBody) => callAPI('GetPDFData', requestBody)),
  QueryReportData: ((requestBody) => callAPI('QueryReportData', requestBody)),
  ExecReportData: ((requestBody) => callAPI('ExecReportData', requestBody)),
  UploadRepotExcel: ((requestBody) => callAPI('UploadRepotExcel', requestBody)),
};

export { APICollection };
