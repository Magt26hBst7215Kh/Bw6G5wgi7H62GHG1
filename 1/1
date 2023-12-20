addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))  
})

async function handleRequest(request) {

  const path = new URL(request.url).pathname

  // Map paths to target URLs
  const paths = {
    '/page1': 'https://example1.com',
    '/page2': 'https://example2.com'
  }

  // Default URL if no match
  const defaultUrl = 'https://defaultsite.com'

  // Fetch target URL if path is mapped
  if (path in paths) {
    const target = paths[path]
    const res = await fetch(target)
    return new Response(res.body, {headers: res.headers}) 
  }

  // Fetch default URL if no match
  const res = await fetch(defaultUrl)
  return new Response(res.body, {headers: res.headers})
}
