import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';

function deleteDir(url){
    var files = [];
        
    if( fs.existsSync(url) ) {  //判斷給定的路徑是否存在
            
        files = fs.readdirSync(url);   //返回文件和子目錄的數組
        files.forEach(function(file,index){
            var curPath = path.join(url,file);
                
            if(fs.statSync(curPath).isDirectory()) { //同步讀取文件夾文件，如果是文件夾，則函數回調
                deleteDir(curPath);
            } else {    
                fs.unlinkSync(curPath);    //是指定文件，則刪除
            }
                
        });
            
        fs.rmdirSync(url); //清除文件夾
    }else{
        console.log("資料夾不存在！");
    }
}

deleteDir('../assets');

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const indexPath = path.resolve(__dirname, './dist/index.html');

const templatePath = path.resolve(__dirname, '../template.htm');

fs.renameSync(indexPath, templatePath);


const dist = path.resolve(__dirname, './dist/assets');

const templateDist= path.resolve(__dirname, '../assets');

fs.renameSync(dist, templateDist);

