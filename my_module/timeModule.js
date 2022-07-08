/**
 * explain : 현재 시간을 "연_월_일_시_분_초" 형태의 string을 반환함
 * @returns 
 */
exports.getTimeStamp = function() {
    const today = new Date();
    const timeStamp = today.getFullYear() + "_" + ( today.getMonth()+1 ) + "_" +
                      today.getDate() + "_" + today.getHours() + "_" +
                      today.getMinutes() + "_" + today.getSeconds();
    return timeStamp;
}