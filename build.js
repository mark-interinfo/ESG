import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';

function deleteDir(url){
    var files = [];
        
    if( fs.existsSync(url) ) {  //判断给定的路径是否存在
            
        files = fs.readdirSync(url);   //返回文件和子目录的数组
        files.forEach(function(file,index){
            var curPath = path.join(url,file);
                
            if(fs.statSync(curPath).isDirectory()) { //同步读取文件夹文件，如果是文件夹，则函数回调
                deleteDir(curPath);
            } else {    
                fs.unlinkSync(curPath);    //是指定文件，则删除
            }
                
        });
            
        fs.rmdirSync(url); //清除文件夹
    }else{
        console.log("不存在！");
    }

}

deleteDir('c:/dmaker64/html/css/ESG/assets');

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const indexPath = path.resolve(__dirname, './dist/index.html');

const templatePath = path.resolve(__dirname, '../template.htm');

fs.renameSync(indexPath, templatePath);


const dist = path.resolve(__dirname, './dist/assets');

const templateDist= path.resolve(__dirname, '../assets');

fs.renameSync(dist, templateDist);
