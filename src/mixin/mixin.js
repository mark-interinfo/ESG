document.body.onclick = function(event){
  if(event.target.tagName == "SELECT"){
    if(event.target.value != ""){
      event.target.classList.add("selected");
    }else{
      event.target.classList.remove("selected");
    };
  };
};


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

const switchOpen = function(){

  if(issue.dataset.switch == "true"){
    return;
  };

  issue.dataset.switch = "true";

  var titles = document.querySelectorAll(".issue-tag");
  var items = document.querySelectorAll(".issue-item");

  var open = "全部展開";
  var close = "全部收合";

  for(let i=0;i<titles.length;i++){
    titles[i].onclick = function(){

      for(let i=0;i<items.length;i++){
        items[i].classList.remove("opening");
      };

      toggle.dataset.name = open;

      if(document.querySelector("#issue-tags .selected")){
        document.querySelector("#issue-tags .selected").classList.remove("selected");
      };

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

  var toggle = document.querySelector("#issue-toggle");
  toggle.dataset.name = open;

  var listTitle = document.querySelectorAll(".issue-title")

  for(let i=0;i<listTitle.length;i++){
    listTitle[i].onclick = function(){
      this.parentNode.classList.toggle("opening");
      var itemOpen = document.querySelectorAll(".issue-item:not([style*='none']):not(.opening)");
      var type = open;
      if(itemOpen.length == 0){
        type = close;
      };
      toggle.dataset.name = type;
    };
  };

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

  titles[0].click();
};

export {
  unicodeToString,
  switchOpen,
}

