import dirRequirer from "dir-requirer";
import _ from "lodash";

let dr = dirRequirer(__dirname);

export default function (server) {
  console.log("in api");
  // ---------------------------
  // 加载各个文件中的controllers
  // ---------------------------
  let controllers = dr("./controller", {
    fileBlackList: [],
    dirBlackList: [],
    ext:['.ts','.js','.node','.json']
  });

  _.forIn(controllers, function (fn, _) {
    if (fn && fn.default && typeof fn.default === "function") {
      // 为了兼容某些不支持es6模块的代码...
      fn.default(server);
    } else if (fn && typeof fn === "function") {
      fn(server);
    }
  });
}
