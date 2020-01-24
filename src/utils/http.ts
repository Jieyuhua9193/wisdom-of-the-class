import http from 'axios';
import Cookie from 'js-cookie'

type Success = any;
type Error = any;

enum Method { get, post }

http.defaults.baseURL = 'api/';
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
http.defaults.headers.post['token'] = Cookie.get('wisdom_of_class_token');

export function post(url: string) {
  return request(url, Method.post);
}

function request(url: string, method: Method) {
  return (params?: any) => {
    return new Request(url, method, params);
  };
}

class Request {
  private successBlock?: (r?: Success) => void;
  private failureBlock?: (code: string, msg?: string) => void;
  private errorBlock?: (r: Error) => void;
  private doneBlock?: () => void;

  constructor(url: string, method: Method, params?: any) {
    let options: object;
    let req: any;
    req = method === Method.get ? http.get : http.post;
    options = {
      method: method === Method.get ? 'GET' : 'POST',
      data: params ? params : {},
      url
    };
    http(options).then(r => {
      let evt: CustomEvent<any>;
      if (r.data.code === 0) {
        if (this.successBlock === null) {
          if (this.failureBlock === null) {
            evt = new CustomEvent('httpResponseWarning', {
              detail: r.data.msg,
            });
            window.dispatchEvent(evt);
          } else {
            // @ts-ignore
            this.failureBlock(r.data.code, r.data.msg);
          }
        } else {
          // @ts-ignore
          this.successBlock(r.data.result);
        }
        if (this.doneBlock !== null) {
          // @ts-ignore
          this.doneBlock();
        }
      }
    }).catch(err => {
      let code: string;
      let evt: CustomEvent;
      console.log('[Http catch] err:', err);
      if (this.errorBlock === null) {
        if (err && err.response && err.response.data && err.response.data.code) {
          code = err.response.data.code;
          if (code === 'NEED_LOGIN' || code === 'LOGIN_EXPIRED') {
            window.location.href = 'https://zd.drip.im/dashboard#/user/login'
          } else {
            evt = new CustomEvent('httpResponseError', {
              detail: `系统异常，请刷新重试`,
            });
            window.dispatchEvent(evt);
          }
        } else {
          evt = new CustomEvent('httpResponseError', {
            detail: `系统异常，请刷新重试`,
          });
          window.dispatchEvent(evt);
        }
      } else {
        // @ts-ignore
        this.errorBlock(err);
      }
      if (this.doneBlock !== null) {
        // @ts-ignore
        this.doneBlock();
      }
    })
  }

  public success(block: (r?: Success) => void): Request {
    this.successBlock = block;
    return this;
  }

  public failure(block: (code: string, msg?: string) => void): Request {
    this.failureBlock = block;
    return this;
  }

  public error(block: (r?: Error) => void): Request {
    this.errorBlock = block;
    return this;
  }

  public done(block: () => void): Request {
    this.doneBlock = block;
    return this;
  }
}


