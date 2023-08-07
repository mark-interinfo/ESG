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
  var titles = document.querySelectorAll(".issue-tag");
  var items = document.querySelectorAll(".issue-item");

  var open = "全部展開";
  var close = "全部收合";

  for(let i=0;i<titles.length;i++){
    titles[i].onclick = function(){

      if(this.getAttribute("class").match("selected")){
        return;
      };

      for(let i=0;i<items.length;i++){
        items[i].classList.remove("opening");
      };

      toggle.dataset.name = open;

      if(document.querySelector("#issue-tags .selected")){
        document.querySelector("#issue-tags .selected").classList.remove("selected");
      };

      this.classList.add("selected");
      issue.dataset.open = this.id;

      if(this.id == "all"){
        for(let a=0;a<items.length;a++){
          items[a].style.display="";
        };
      }else{
        for(let a=0;a<items.length;a++){
          if(items[a].dataset.item != this.id ){
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

  for(let i=0;i<items.length;i++){
    items[i].onclick = function(){
      this.classList.toggle("opening");
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

