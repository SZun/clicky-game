"use strict";var precacheConfig=[["/clicky-game/index.html","e9103674c0821ed24469703a4d4adcb2"],["/clicky-game/static/css/main.36ccd409.css","7d2a8174f8110c5291a25e4834d68110"],["/clicky-game/static/js/main.f0ff19a8.js","3bb4c71c473f1fd8de18e10f0965796b"],["/clicky-game/static/media/beth.d63bb884.jpg","d63bb884b3939e0551d3a4d8947a8a9d"],["/clicky-game/static/media/bird_person.c417d9cf.jpeg","c417d9cfe0dc525f5e637ecc45971593"],["/clicky-game/static/media/goldenfold.e6552083.jpg","e65520833b1238df4c4417b96dc77326"],["/clicky-game/static/media/jerry.3cc411cf.jpg","3cc411cf172157a2d6a09c3ac0d5b88c"],["/clicky-game/static/media/krombopulos_micheal.1dc15146.png","1dc151463366973b36fa796174812b75"],["/clicky-game/static/media/mail_man.43f1b1bd.jpg","43f1b1bd1747078a734e52e0def92de9"],["/clicky-game/static/media/mr_me_seeks.18fd94f4.png","18fd94f4ac79dbc807e9462f07637f9e"],["/clicky-game/static/media/mr_pb.8f2b605b.png","8f2b605b66f75c5da4d3ea0afd116219"],["/clicky-game/static/media/rick.e74f2d19.jpg","e74f2d19d9a22f259d3e14c0f48a1568"],["/clicky-game/static/media/squanchy.0c2c49ff.png","0c2c49ff9bf31210174d8a36bf4c5a47"],["/clicky-game/static/media/summer.c689ce03.png","c689ce0381143bb7398566c30ece3fea"],["/clicky-game/static/media/tammy.480a14e0.png","480a14e0a21cc75af1127c91447b6ba6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/clicky-game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});