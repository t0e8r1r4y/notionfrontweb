const NotionPageToHtml = require('notion-page-to-html');

exports.getPage = async function( url , callback ) {
    const { title, icon, cover, html } = await NotionPageToHtml.convert(url);
    // console.log(title, icon, cover, html);
    callback(html)
}