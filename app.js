/**
 *  author          : Terry Shin
 *  Date            : 2022.07.07
 *  Modified Data   : 2022.08.08
 *  version         : v1.1 
 */

// const version="1.0"     // 22.07.07 : 최초 생성 버전
const version="1.1"         // 22.07.08 : 내가 작성한 모듈을 my_module 폴더아래 이동, app.js에서 경로 수정

// nodejs module require
const myTime        = require('./my_module/timeModule');
const myNotion2Html = require('./my_module/notionPageHtmlModule');
const myFileCtl     = require('./my_module/htmlFileSaveModule')

let express         = require("express");
let app             = express();

// gloabal values
const myHtmlFileName        = 'index.html'
const myHtmlBackFileName    = 'index_'+myTime.getTimeStamp()+'.html'

app.use(express.static('/Users/terryakishin/notion-example/public'));
app.use(express.urlencoded({extended: true}));

app.use('/add', function(req,res){
    console.log(req.body.url);
    console.log(req.body.path);

    const myProjectDir          = req.body.path+"/"+myHtmlFileName;
    const myProjectDirRename    = req.body.path+"/"+myHtmlBackFileName;

    // ver 1.1 수정 - myFileCtl 모듈의 checkAlreadyExistedFile 메서드 인자 수정
    myFileCtl.checkAlreadyExistedFile( myProjectDir, function(res){ 
        console.log(res);
        if(res == true)
            myFileCtl.renameFile(myProjectDir, myProjectDirRename);
    });

    myNotion2Html.getPage( req.body.url , function(res){
        myFileCtl.writeHtmlFile(myProjectDir, res)
    })
    
    res.send("전송완료. 프로젝트 경로에서 git을 master branch에 push 하시오.");
})


app.listen(4000, function()
{
    console.log("App is running on port 4000. version : " + version);
});

app.get("/", function(req, res){
    res.sendFile("/Users/terryakishin/notion-example/public/main.html");
});



