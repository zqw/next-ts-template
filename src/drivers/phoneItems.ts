import Promise from "bluebird";

let phoneGetDataAsyncTimerId;
export const phoneGetDataAsync = function (key) {
  return new Promise(function (resolve, reject) {
    if (phoneGetDataAsyncTimerId) {
      clearTimeout(phoneGetDataAsyncTimerId);
      phoneGetDataAsyncTimerId = undefined;
    }
    phoneGetDataAsyncTimerId = setTimeout(function () {
      reject(new Error("phoneGetDataAsync timeout"));
    }, 1800000); // 最多等30分钟
    // @ts-ignore
    global.phoneGetDataAsyncCallback = function (value) {
      if (phoneGetDataAsyncTimerId) {
        clearTimeout(phoneGetDataAsyncTimerId);
        phoneGetDataAsyncTimerId = undefined;
      }
      resolve(value);
    };
    // @ts-ignore
    let value = global.phoneGetData(key);
    if (value) {
      if (phoneGetDataAsyncTimerId) {
        clearTimeout(phoneGetDataAsyncTimerId);
        phoneGetDataAsyncTimerId = undefined;
      }
      return resolve(value);
    }
  });
};
