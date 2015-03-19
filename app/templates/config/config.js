var development = {
  firebase: {
    rootRefUrl: "<%=gen.devRootRef%>",
    serverUID: "<%=gen.appName%>",
    secretKey: "<%=gen.devSecret%>"
  }
};

var test = {
  firebase: {
    rootRefUrl: "<%=gen.testRootRef%>",
    serverUID: "<%=gen.appName%>",
    secretKey: "<%=gen.testSecret%>"
  }
};

var production = {
  firebase: {
    rootRefUrl: process.env.FB_URL,
    serverUID: process.env.FB_SERVER_UID, 
    secretKey: process.env.FB_SECRET_KEY
  }
};

var config = {
  development: development,
  test: test,
  production: production,
};
module.exports = config;