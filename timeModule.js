exports.getTimeStamp = function() {
    const today = new Date();
    const timeStamp = today.getFullYear() + "_" + ( today.getMonth()+1 ) + "_" +
                      today.getDate() + "_" + today.getHours() + "_" +
                      today.getMinutes() + "_" + today.getSeconds();
    return timeStamp;
}