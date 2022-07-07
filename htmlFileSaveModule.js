const fs = require('fs/promises');

exports.checkAlreadyExistedFile = async function( filePath, backUpFilePath, callback  ) {

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

exports.writeHtmlFile = async function( filePath, content ) {
    fs.writeFile(filePath, content, err => {
        if(err)
        {
            console.log(err);
            return;
        }
    })
};

exports.renameFile = async function(filePath, backUpFilePath){
    fs.rename(filePath, backUpFilePath, err => {
        if(err)
            return console.log(err);
    })
}