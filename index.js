<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
html {
  -webkit-print-color-adjust: exact;
}

* {
  box-sizing: border-box;
  -webkit-print-color-adjust: exact;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: system-ui, sans-serif;
  color: #37352F;
}

body {
  line-height: 1.5;
}

@media only screen {
  body {
    margin: 2em auto;
    max-width: 900px;
    color: rgb(55, 53, 47);
  }
}

img {
  max-width: 100%;
  max-height: 70vh;
}

ol,
ul {
  margin: 0;
  margin-block-start: 0.6em;
  margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
  margin-block-start: 0.6em;
}

ul > li {
  list-style: disc;
}

ul.to-do-list {
  text-indent: -1.7em;
}

ul.to-do-list > li {
  list-style: none;
}

.to-do-children-checked {
  text-decoration: line-through;
  opacity: 0.375;
}

ul.toggle > li {
  list-style: none;
}

ul {
  padding-inline-start: 1.7em;
}

ul > li {
  padding-left: 0.1em;
}

ol {
  padding-inline-start: 1.6em;
}

ol > li {
  padding-left: 0.2em;
}

.mono ol {
  padding-inline-start: 2em;
}

.mono ol > li {
  text-indent: -0.4em;
}

.toggle {
  padding-inline-start: 0em;
  list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
  padding-left: 1.7em;
}

.toggle > li > details > summary {
  margin-left: -1.1em;
}

h1,
h2,
h3 {
  letter-spacing: -0.01em;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 0;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.75em;
}

.icon {
  display: inline-block;
  max-width: 1.2em;
  max-height: 1.2em;
  text-decoration: none;
  vertical-align: text-bottom;
  margin-right: 0.5em;
}

img.icon {
  border-radius: 3px;
}

.page-cover-image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 30vh;
}

.page-header-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-header-icon-with-cover {
  margin-top: -0.72em;
  margin-left: 0.07em;
}

.page-header-icon img {
  border-radius: 3px;
}

blockquote {
  font-size: 1.25em;
  margin: 1em 0;
  padding-left: 1em;
  border-left: 3px solid rgb(55, 53, 47);
}  

h1 {
  font-size: 1.875rem;
  margin-top: 1.875rem;
}

h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}

h3 {
  font-size: 1.25rem;
  margin-top: 1.25rem;
}

.callout {
  padding: 16px 16px 16px 12px;
  display: flex;
  width: 100%;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  align-items: center;
  justify-content: center;
}

.callout-emoji {
  height: 21.6px;
  width: 21.6px;
  font-size: 21.6px;
  line-height: 1.1;
  margin-left: 0px;
}

.callout p {
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  margin-left: 10px;
}

.image {
  border: none;
  margin: 1.5em 0;
  padding: 0;
  border-radius: 0;
  text-align: center;
}

figure {
  margin: 1.25em 0;
  page-break-inside: avoid;
}

figcaption {
  opacity: 0.5;
  font-size: 85%;
  margin-top: 0.5em;
}

hr {
  background: transparent;
  display: block;
  width: 100%;
  height: 1px;
  visibility: visible;
  border: none;
  border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

.checkbox {
  display: inline-flex;
  vertical-align: text-bottom;
  width: 16px;
  height: 16px;
  background-size: 16px;
  margin-left: 2px;
  margin-right: 5px;
}

.checkbox-on {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
</style>
<title>Notion 페이지를 Web Front로 사용하는 자동화 tool</title>
<link href="https://unpkg.com/prismjs@1.22.0/themes/prism.css" rel="stylesheet">
</head>
<body>
<header>


<h1 class="page-title">Notion 페이지를 Web Front로 사용하는 자동화 tool</h1>
</header>    

<hr>
<p></p>
<h1>Notion Page를 Web Front로 사용하는 자동화 tool 만들기</h1>
<p></p>
<h2>1. 기획</h2>
<h3>1-1. 의도</h3>
<ul>
<li>우피라는 사이트를 보면 notion 페이지 주소를 입력하면 자동으로 사이트를 만들어주는 사이트입니다.</li>
<li>사이트를 분석해본 결과, notion에서 제공하지 않는 html 태그를 추가할 수 있고 레이아웃의 배치를 바꾸거나, 외부 라이브러리를 추가 할 수 있습니다.</li>
<li>핵심은 노션 페이지를 어떻게 배포를 할 것인가? → 특히 <a href="http://oopy.io" target="_blank">oopy.io</a> 라는 도메인을 사용해서 처리하는 것을 어떻게 하는 것인가?는 아직 좀 더 파악이 필요하다.</li>
</ul>
<p></p>
<h3>1-2. 동작 방식 분석</h3>
<ul>
<li>notion page 주소를 입력하면 그 page를 홈페이지 front로 만들어 줌</li>
<li>내가 봤을 때 notion page 입력받은 주소를 html로 변경을 해줌 → 이 html 파일을 웹 front로 띄워주는 역할 하는 것.</li>
<li>그리고 내가 쓸 url을 입력하면 https:// <내가 쓸 url명>.oopy.io을 만들어 준다.</li>
<li>일단 html을 내가 막 변경하기에 front 지식이 조금 없으니까 위 두가지만 실행되는 것을 하나 만들어보고자 한다.</li>
</ul>
<p></p>
<h3>1-3. 개발 기획</h3>
<ul>
<li>입력으로 노션 페이지 주소가 주어지면, html로 바꿔서 파일로 저장한다.</li>
<li>웹서버는 github pages를 사용한다.</li>
<li>html파일을 github pages에 추가를 자동으로 배포하는 과정을 가진다.</li>
</ul>
<p></p>
<h2>2. 개발</h2>
<p></p>
<h2>3. 테스트</h2>
<p></p>
<h2>4. 배포</h2>
<p></p>
<h2>5. 결과</h2>
<p></p>
<hr>
<h2>참고 사이트</h2>
<h3>노션 API</h3>
<ul>
<li>노션 API</li>
<li>API Reference</li>
<li>Notion Api를 사용하기 위한 npm install</li>
<li>node js 실행 파일 만들어주는 것</li>
</ul>
<p></p>
<h3>마크업 언어</h3>
<ul>
<li>Mark up language</li>
<li>html 변환</li>
</ul>
<p></p>
<h3>Github web hosting</h3>
<ul>
<li>생활코딩 자료</li>
</ul>
<p></p>
<p></p>
<h3>우피 벤치마킹</h3>
<ul>
<li>우피</li>
</ul>
<p></p>
<script src="https://unpkg.com/prismjs@1.22.0/components/prism-core.min.js"></script>
<script src="https://unpkg.com/prismjs@1.22.0/plugins/autoloader/prism-autoloader.min.js"></script>
<script>
MathJax = {
  tex: {
    inlineMath: [['$', '$']]
  }
};
</script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
</script>
</body>
</html>