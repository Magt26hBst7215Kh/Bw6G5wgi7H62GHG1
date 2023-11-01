addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request){
   let url = new URL(request.url);
  url.hostname = "domain";                       
      url.protocol = "https";
   let upstream = new Request(url, request);

    return fetch(upstream);

}
