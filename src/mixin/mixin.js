const unicodeToString = function(unicode){
  unicode = unicode.split("\\u");
  unicode.shift();
  return unicode.reduce((result, item)=>{
    return result+=String.fromCharCode(String(parseInt(item, 16)));
  }, '');
  // split()               分割成陣列
  // shift()               去除第一項
  // String.fromCharCode() 從UTF-16轉成文字
  // parseInt()            回傳16進位制數值
}

const chineseNumber = function(number){
  let chineseLower = [
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
    '十三',
    '十四',
    '十五',
    '十六',
    '十七',
    '十八',
    '十九',
    '二十',
    '二十一',
    '二十二',
    '二十三',
    '二十四',
    '二十五',
    '二十六',
    '二十七',
    '二十八',
    '二十九',
    '三十',
  ];
  return chineseLower[number];
}

const loading = () => {

  if(document.querySelector("#loading")){
      return;
  };
  
  var InpBox = document.createElement("div");
  InpBox.setAttribute("id","loading");

  let host = "/css/ESG/ESG"

  if(location.host == "192.168.10.141:5173"){
    host = "http://192.168.10.141:5173"
  }
  
  var loading = document.createElement("img");
  loading.src = host + "/src/assets/images/loading.svg";

  InpBox.appendChild(loading);

  document.body.appendChild(InpBox);
  
};

const loadingClose = () => {
  if(document.querySelector("#loading")){
      document.querySelector("#loading").remove();
  };
};

const switchOpen = function(){
  var option={
      childList: true,
      subtree : true
  };

  monitor("body",back,option);

  function back(a,b){
    for(var i=0;i<b.length;i++){
      if(b[i].addedNodes && b[i].addedNodes.length > 0){
        if(b[i].target.querySelector(".issue-item")){
          run();
        };
      };
    };
  };

  run();
  function run(){

    var titles = document.querySelectorAll(".issue-tag");
    var items = document.querySelectorAll(".issue-item");
    var toggle = document.querySelector("#issue-toggle");

    var open = "全部展開";
    var close = "全部收合";

    for(let i=0;i<titles.length;i++){
      titles[i].onclick = function(){

        if(this.dataset.id == "+"){
          alert("新增大類")
          return;
        };

        //全部展開收合預設文字
        if(toggle){
          toggle.dataset.name = open;
        };

        //全部區塊收合
        for(let i=0;i<items.length;i++){
          items[i].classList.remove("opening");
        };

        //清除選中頁簽
        if(document.querySelector("#issue-tags .selected")){
          document.querySelector("#issue-tags .selected").classList.remove("selected");
        };

        //當下頁簽選中
        this.classList.add("selected");
        document.querySelector("#issue").dataset.open = this.dataset.id;

        if(this.dataset.id == "全部議題"){
          for(let a=0;a<items.length;a++){
            items[a].style.display="";
          };
        }else{
          for(let a=0;a<items.length;a++){
            if(items[a].dataset.item != this.dataset.id ){
              items[a].style.display="none";
            }else{
              items[a].style.display="";
            };
          };
        };
      };
    };
    
    //全部展開收合行為
    if(toggle){
      toggle.dataset.name = open;
      toggle.onclick = function(){
        if(this.dataset.name == open){
          for(let i=0;i<items.length;i++){
            items[i].classList.add("opening");
          };
          this.dataset.name = close;
        }else{
          for(let i=0;i<items.length;i++){
            items[i].classList.remove("opening");
          };
          this.dataset.name = open;
        };
      };
    };

    //抬頭點擊開關內容
    var listTitle = document.querySelectorAll(".issue-title")

    for(let i=0;i<listTitle.length;i++){
      listTitle[i].onclick = function(){
        this.parentNode.classList.toggle("opening");
        var itemOpen = document.querySelectorAll(".issue-item:not([style*='none']):not(.opening)");
        var type = open;
        if(itemOpen.length == 0){
          type = close;
        };
        toggle && (toggle.dataset.name = type);
      };
    };

    
  };
};

function monitor(obj,func,option){
  /*
  obj : 監聽物件 id
  
  func : 觸發 function(obj,records)
  
  var option={
      childList: true,         //子節點
      attributes: true,        //屬性
      //characterData: true,   //數據
      //subtree : true         //所有子節點
  };
  */
  var triggerEvent;
  document.querySelector(obj).addEventListener("click",function(event){
      triggerEvent = event;
  });
  
  function trigger(records){
      //records.map(function(record){console.log(record);});
      var X = [];
      records.map(function(record){X.push(record.type)});
      //console.log(X)
      if(X.length > 0){
          func(obj,records,triggerEvent);
      };
  };

  var change = new MutationObserver(trigger);
  
  if(!option){
      var option={
          childList: true,//子節點
          attributes: true,//屬性
      };
  };
  
  change.observe(document.querySelector(obj),option);
};

export {
  unicodeToString,
  chineseNumber,
  switchOpen,
  loading,
  loadingClose,
}

