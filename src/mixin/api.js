// let base = 'http://192.168.10.108/servlet/apiM/ESG/V1/interfaces/';

// function callAPI(apiName, requestBody, method='POST'){
//   fetch(base + apiName, {
//     method: method,
//     body: `requestBody=${JSON.stringify(requestBody.value)}&requestHeader={}`,
//     headers: {
//       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     },
//   })
//   .then((response) => response.json())
//   .then((result) => {
//     return result.responseBody;
//   })
//   .catch(err => console.log(err));
// };

// const APICollection = {
//   // AccessYearDemand: ((requestData) => {
//   //   callAPI('AccessYearDemand', requestData);
//   //   return returnData;
//   // })
//   AccessYearDemand: async function(requestData){
//     await callAPI('AccessYearDemand', requestData);
//   }
// };

// export { APICollection };
