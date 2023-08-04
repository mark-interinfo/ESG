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

export {
  unicodeToString,
}

