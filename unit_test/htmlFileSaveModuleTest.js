const testVersion="1.0"  // 최초 테스트 작성 버전

const myFileCtlTest = require('../my_module/htmlFileSaveModule');

// checkAlreadyExistedFile 메서드 테스트 입니다.
// 시나리오 : 해당 경로에 index.html이 없는 상황에서 false가 return을 예상함
const inputTestFilePath = "/Users/terryakishin/notion-example/unit_test/index.html"
const expectedValue     = false;

myFileCtlTest.checkAlreadyExistedFile(inputTestFilePath, function(res){
    if(res == expectedValue)
    {
        console.log("test success.")
    }
})


// writeHtmlFile 메서드 테스트 입니다.
// 시나리오  : 해당 경로에 test_test.txt 파일을 생성하고 해당 파일에 아래 텍스트를 쓰기한 결과를 예상함
// 비고     : 간단한 테스트기에 쓰기만 보지만, contenst가 길다면 파일을 read하여 동일한지 비교
const inputTestFilePath2 = "/Users/terryakishin/notion-example/unit_test/test_test.txt"
const str = "This is Test."

myFileCtlTest.writeHtmlFile(inputTestFilePath2, str);



// renameFile 메서드를 테스트 합니다.
// 시나리오 해당 경로의 파일명(test.txt)를 변경할 파일명(test2.txt)로 바뀔 것을 예상함
const inputTestFilePath3 = "/Users/terryakishin/notion-example/unit_test/test.txt"
const inputTestFilePath4 = "/Users/terryakishin/notion-example/unit_test/test2.txt"

myFileCtlTest.renameFile(inputTestFilePath3, inputTestFilePath4);