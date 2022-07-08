const testVersion="1.0"  // 최초 테스트 작성 버전

const myNotion2HtmlTest = require('../my_module/notionPageHtmlModule');
const url = "https://www.notion.so/Notion-Web-Front-tool-54f8ce9e55214f7a8d378b6239cfebc7"

// getPage 메서드 테스트입니다.
// 시나리오 : notion page의 html을 가져와서 출력할 것을 예상
myNotion2HtmlTest.getPage(url, function(res){
    console.log(res);
})