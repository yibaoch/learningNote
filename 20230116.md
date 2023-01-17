网页的 TKD 三要素是指一个网页的三个关键信息，含义如下：

T ，指 Title ，网站的标题，即网页的 <title>网站的标题</title> 标签。

K ，指 Keywords ，网站的关键词，即网页的 <meta name="Keywords" content="关键词1,关键词2,关键词3" /> 标签。

D ，指 Description ，网站的描述，即网页的 <meta name="description" content="网站的描述" /> 标签。

这三个要素标签都位于 HTML 文件的 <head /> 标签内。



## CommonJS 

默认导入和导出 
  
  module.export = 
  
  require()
 
命名导出和导入

  module.export = {
    foo, bar
  }
  
  const { foo, bar } = require('./module.cjs')
  
导入时重命名
 
   const { foo: fooB } = require('./module.cjs')
   
 
## ES Module

ESM 使用 export default （默认导出）和 export （命名导出）这两个语法导出模块

默认导出和导入

  export default 've'
  
  import a from './module.cjs'
  
命名导出和导入
  
  export const a = 'a'
  export const b = 'b'
  
  import {a, b} from './module.mjs'
  
  import * as a from './module.mjs'
  a.m()
  a.n()
  
导入时重命名

  <old-name> as <new-name>
  import { a as ac } from './module.mjs'
  
  
  
## CORS
CORS （全称 Cross-Origin Resource Sharing ）是指跨源资源共享，可以决定浏览器是否需要阻止 JavaScript 获取跨域请求的响应。

现代浏览器默认使用 “同源安全策略” ，这里的 “源” 指 URL 的 origin 部分，例如网页可以通过 window.location.origin 获取到如 https://example.com 这样格式的数据，就是网页的 origin 。

默认情况下，非同源的请求会被浏览器拦截，最常见的场景是通过 XHR 或者 Fetch 请求 API 接口，需要网页和接口都部署在同一个域名才可以请求成功，否则就会触发跨域限制。

如果网页和接口不在同一个域名，例如网页部署在 https://web.example.com ，接口部署在 https://api.example.com ，此时需要在 https://api.example.com 的 API 服务端程序里，配置 Access-Control-Allow-Origin: * 允许跨域请求（ * 代表允许任意外域访问，也可以指定具体的域名作为白名单列表）。
