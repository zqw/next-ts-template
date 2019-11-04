const cdn = function() :string{
  // @ts-ignore
  if (!global.window) {
    // @ts-ignore
    if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production") {
      return "http://XXX.XXX.com.cn/static/XXX-field"
    }
  }
  return ""
};

export {cdn};
