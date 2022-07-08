const fs = require('fs/promises');

/**
 * explain : 기존에 index.html 파일 여부를 확인함
 * @param {*} filePath 
 * @param {*} callback 
 */
exports.checkAlreadyExistedFile = async function( filePath, callback  ) {

    try {
        const stats = await fs.stat(filePath);
        
        if(stats.isFile)
            callback(true)
        else
            callback(false)

    } catch (error) {
        console.log(error);
        callback(false)
    }

}

/**
 * explain : filePath에 content를 파일로 쓰기를 함
 * @param {*} filePath 
 * @param {*} content 
 */
exports.writeHtmlFile = async function( filePath, content ) {
    fs.writeFile(filePath, content, err => {
        if(err)
        {
            console.log(err);
            return;
        }
    })
};

/**
 * explain : 파일 이름을 변경
 * @param {*} filePath 
 * @param {*} backUpFilePath 
 */
exports.renameFile = async function(filePath, backUpFilePath){
    fs.rename(filePath, backUpFilePath, err => {
        if(err)
            return console.log(err);
    })
}