const NotionPageToHtml = require('notion-page-to-html');

/**
 * explain : 노션 페이지 주소(url)를 입력받아 html을 반환함
 * @param {*} url 
 * @param {*} callback 
 */
exports.getPage = async function( url , callback ) {
    const { title, icon, cover, html } = await NotionPageToHtml.convert(url);
    // console.log(title, icon, cover, html);
    callback(html)
}