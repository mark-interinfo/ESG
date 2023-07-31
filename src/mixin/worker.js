//20230719


self.addEventListener("message", function(e) {

    if(e.data[0] == "asyncAjax"){
        
        var data = "";
        var random = "";
        
        var XML = new XMLHttpRequest();

        if(e.data[2] == "post"){
            type = "post";
            data = e.data[3];
        }else{
            type = "get";
            random = "?" +Math.floor(Math.random()*1000);
        };

        XML.onreadystatechange = function() {
            if (this.readyState == 4){
                //成功
                if(this.status == 200){
                    self.postMessage(this.responseText);
                    self.close();
                };
                //失敗
                if (this.status == 404) {
                    var info = {};
                    info.status = 404;
                    info.method = e.data[0];
                    info.url = e.data[1];
                    info.type = e.data[2];
                    info.data = e.data[3];
                    self.postMessage(JSON.stringify(info));
                    self.close();
                };
            };
        };
        
        XML.open(type, e.data[1] + random);

        if(type == "post"){
            XML.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        };

        XML.send(data);
    };
     
});

