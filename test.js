const myTime        = require('./timeModule');
const myNotion2Html = require('./notionPageHtmlModule');
const myFileCtl     = require('./htmlFileSaveModule')

const fs = require('fs/promises');
// using then
// NotionPageToHtml.convert("https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f").then((page) => console.log(page));

const url = "https://www.notion.so/Yurts-in-Big-Sur-California-f3169914842944939b429aad932c9a0b";
const myProjectDir          = '/Users/terryakishin/notion-example/index.html';
const myProjectDirRename    = '/Users/terryakishin/notion-example/index_'+myTime.getTimeStamp()+'.html';


myFileCtl.checkAlreadyExistedFile( myProjectDir,myProjectDirRename, function(res){
    console.log(res);
    if(res == true)
        myFileCtl.renameFile(myProjectDir, myProjectDirRename);
});



myNotion2Html.getPage(url, function(res){
    myFileCtl.writeHtmlFile(myProjectDir, res)
    // console.log(res)
})

// myFileCtl.backUpAlreadyExitedFile(myProjectDir,myProjectDirRename)
// myFileCtl.writeHtmlFile(myProjectDir, myNotion2Html.getPage(url))
