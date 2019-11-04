import axios from "axios";
import Promise from "bluebird";
import _ from "lodash";

let items_GET = [
  "abc",
]

let items_POST = [
  "cdef",
]

function buildHeaders(items) {
  let headers = _.reduce(
    items,
    function (memo, item) {
      let longKey = `x-XXX-${item}`;
      // @ts-ignore
      let value = global.phoneGetData(item);
      if (value === undefined || value === null) {
        value = undefined;
      }

      return _.extend(memo, {
        [longKey]: value
      });
    },
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  );
  console.log(headers);
  return headers;
}

function request(method, url, data, config?) {
  let url_method = url.split('/')[2].split('_')[0];
  data = data || {};
  let axiosInstance;

  if (url_method === 'GET') {
    axiosInstance = axios.create({
      timeout: 10000, // 增加timeout到10秒
      headers: buildHeaders(items_GET)
    });
  } else {
    axiosInstance = axios.create({
      timeout: 10000, // 增加timeout到10秒
      headers: buildHeaders(items_POST)
    });
  }


  return axiosInstance[method](url, data, config).catch(function (error) {
    return Promise.reject(error);
  });
}

let axiosProxy = {
  get: function (url, config?) {
    return request("get", url, config);
  },
  delete: function (url, config?) {
    return request("delete", url, config);
  },
  head: function (url, config?) {
    return request("head", url, config);
  },
  options: function (url, config?) {
    return request("options", url, config);
  },
  post: function (url, data, config?) {
    return request("post", url, data, config);
  },
  put: function (url, data, config?) {
    return request("put", url, data, config);
  },
  patch: function (url, data, config?) {
    return request("patch", url, data, config);
  }
};

export default axiosProxy;
