// Additional middleware which will set headers that we need on each request.
const allowCors = function (req, res, next) {
   // Set permissive CORS header - this allows this server to be used only as
   // an API server in conjunction with something like webpack-dev-server.
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", "*");
   res.setHeader(
      `Access-Control-Allow-Methods `,
      `GET, POST, PUT, DELETE, OPTIONS`
   );
   res.setHeader("Access-Control-Max-Age", 3600); // 1 hour
   // Disable caching so we'll always get the latest posts.
   res.setHeader("Cache-Control", "no-cache");
   next();
};

export { allowCors };
