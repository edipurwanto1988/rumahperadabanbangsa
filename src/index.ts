export default {
  async fetch(request: any, env: any, ctx: any): Promise<any> {
    const url = new URL(request.url);
    
    // Serve index.html for all routes (SPA behavior)
    if (url.pathname !== '/index.html') {
      return Response.redirect(`${url.origin}/index.html`, 301);
    }
    
    // For the root path or index.html, serve the static file
    return env.ASSETS.fetch(request);
  },
};