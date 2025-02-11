import { useUserStore } from '../pinia/user';
import {loading,loadingClose} from '../mixin/mixin.js'

const userStore = useUserStore();

let host = ""

if(location.host == "192.168.10.141:5173"){
  host = "http://192.168.10.141"
}

let base = host + '/servlet/apiM/esg/V1/interfaces/';

function callAPI(apiName, requestBody, method='POST'){
  loading();

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
    .catch(err => console.log(err)).finally(
      ()=>{
        setTimeout(function(){
          loadingClose();
        },300);
      }
    );
  })
};

const APICollection = {
  // 登入
  ESGLogin: ((requestBody) => callAPI('ESGLogin', requestBody)),
  // 申報端年度查找
  QueryYear: ((requestBody) => callAPI('QueryYear', requestBody)),
  QueryESGData: ((requestBody) => callAPI('QueryESGData', requestBody)),
  UploadPDF: ((requestBody) => callAPI('UploadPDF', requestBody)),
  GetPDFData: ((requestBody) => callAPI('GetPDFData', requestBody)),
  QueryReportData: ((requestBody) => callAPI('QueryReportData', requestBody)),
  ExecReportData: ((requestBody) => callAPI('ExecReportData', requestBody)),
  ExecESGData: ((requestBody) => callAPI('ExecESGData', requestBody)),
  UploadRepotExcel: ((requestBody) => callAPI('UploadRepotExcel', requestBody)),
  QueryInternationalData: ((requestBody) => callAPI('QueryInternationalData', requestBody)),
  QueryMatrixData: ((requestBody) => callAPI('QueryMatrixData', requestBody)),
  // 儲存國際準則設定
  ExecInternationalData: ((requestBody) => callAPI('ExecInternationalData', requestBody)),
  // ESG資訊矩陣設定
  ExecMatrixData: ((requestBody) => callAPI('ExecMatrixData', requestBody)),
  // 上傳excel
  UploadESGExcel: ((requestBody) => callAPI('UploadESGExcel', requestBody)),
  UploadInternationalExcel: ((requestBody) => callAPI('UploadInternationalExcel', requestBody)),
  UploadMatrixExcel: ((requestBody) => callAPI('UploadMatrixExcel', requestBody)),
  DownloadXBRL: ((requestBody) => callAPI('DownloadXBRL', requestBody)),
  DownloadMatrix: ((requestBody) => callAPI('DownloadMatrix', requestBody)),
  QuerySustainable: ((requestBody) => callAPI('QuerySustainable', requestBody)),
  // 上傳永續報告書維護
  ExceSustainable: ((requestBody) => callAPI('ExceSustainable', requestBody)),
  // 下載套表
  DownloadSustainability: ((requestBody) => callAPI('DownloadSustainability', requestBody)),
  
  QueryReportStatus: ((requestBody) => callAPI('QueryReportStatus', requestBody)),
};

export { APICollection };
