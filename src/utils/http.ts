import http from 'axios';
import Cookie from 'js-cookie'
import {Message} from 'iview'

type Success = any;
type Error = any;

enum Method { get, post }

http.defaults.baseURL = 'api/';
http.defaults.headers.post['token'] = Cookie.get('wisdom_of_class_token');

export function post(url: string) {
  return request(url, Method.post);
}

export function get(url: string) {
  return request(url, Method.get);
}

function request(url: string, method: Method) {
  return (params?: any) => {
    return new Request(url, method, params);
  };
}

class Request {
  private successBlock?: (r?: Success) => void;
  private errorBlock?: (r: Error) => void;

  constructor(url: string, method: Method, params?: any) {
    let options: object;
    options = {
      method: method === Method.get ? 'get' : 'post',
      data: params ? params : {},
      url
    };
    http(options).then(r => {
      if (r.data.code === 0) {
        // @ts-ignore
        this.successBlock(r.data.result);
      } else {
        if (r.data.msg) {
          (Message as any).error(r.data.msg);
        } else {
          (Message as any).error('系统异常，请刷新重试');
        }
      }
    }).catch(err => {
      (Message as any).error('系统异常，请刷新重试');
      console.log(err)
    })
  }

  public success(block: (r?: Success) => void): Request {
    this.successBlock = block;
    return this;
  }

  public error(block: (r?: Error) => void): Request {
    this.errorBlock = block;
    return this;
  }
}


