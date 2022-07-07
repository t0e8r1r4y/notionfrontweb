let express = require("express");
let app = express();
// let NotionPageToHtml = require('notion-page-to-html');


const myTime        = require('./timeModule');
const myNotion2Html = require('./notionPageHtmlModule');
const myFileCtl     = require('./htmlFileSaveModule')

// const myProjectDir          = '/Users/terryakishin/notion-example/index.html';
// const myProjectDirRename    = '/Users/terryakishin/notion-example/index_'+myTime.getTimeStamp()+'.html';
const myHtmlFileName        = 'index.html'
const myHtmlBackFileName    = 'index_'+myTime.getTimeStamp()+'.html'

app.use(express.static('/Users/terryakishin/notion-example/public'));
app.use(express.urlencoded({extended: true}));

app.use('/add', function(req,res){
    console.log(req.body.url);
    console.log(req.body.path);

    const myProjectDir          = req.body.path+"/"+myHtmlFileName;
    const myProjectDirRename    = req.body.path+"/"+myHtmlBackFileName;

    myFileCtl.checkAlreadyExistedFile( myProjectDir,myProjectDirRename, function(res){
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
    console.log("App is running on port 4000");
});

app.get("/", function(req, res){
    res.sendFile("/Users/terryakishin/notion-example/public/main.html");
});



