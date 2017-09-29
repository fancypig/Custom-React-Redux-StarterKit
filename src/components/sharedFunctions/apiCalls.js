// 用来提供post，get请求的模板并且写了一些好多函数分享的api请求

import {message} from 'antd'
import Config from '../../config'
import {browserHistory} from 'react-router'
import repFunctions from './repetitiveFunctions'
module.exports = {

  // a standard function for get requests
  getRequest(url){
    return fetch(Config.ip +　url, {
            method: 'GET',
            credentials: 'include',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.status === 401){
                browserHistory.push('/')
                return
            }
            else if (response.status != 200){
                message.error('Oops， 有错误发生', 2)
                return
            }
            else{
                return response.json();
            }
        })
        .catch((error) => {
            console.error(error);
            message.error('Oops， 有错误发生', 2)
        });
    },
   // a standard function for sending post requests
  postRequest(url, body){
    return fetch(Config.ip +　url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then((response) => {
        if (response.status === 401){
            browserHistory.push('/')
            return
        }
        else if (response.status != 200){
            message.error('Oops， 有错误发生', 2)
            return
        }
        else{
            return response.json();
        }
    })
    .catch((error) => {
        console.error(error);
        message.error('Oops， 有错误发生', 2)
    });
  },

}
