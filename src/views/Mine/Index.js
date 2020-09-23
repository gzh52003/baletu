import React,{useState} from 'react';
import './Index.scss';
import {LeftOutlined,RightOutlined} from '@ant-design/icons'
import { List, Typography, Divider } from 'antd';
// import React, { useState, useEffect,useMemo,useCallback } from 'react';


function Mine(props){
  // const {path,gotoLogin} = useState('./mine')
  // const skipLogin = useCallback(function)
  console.log(props);
  const data = [
    {text:'在线交租',icon:"//js.baletoo.cn/static/m/static/images/jiaozu.png"},
    {text:'推荐房源',icon:"//js.baletoo.cn/static/m/static/images/tuijian.png"},
    {text:'收藏房源',icon:"//js.baletoo.cn/static/m/static/images/shoucang.png"},
    {text:'预约房源',icon:"//js.baletoo.cn/static/m/static/images/yuyue.png"},
    {text:'意见反馈',icon:"//js.baletoo.cn/static/m/static/images/yijian.png"},
    {text:'下载app',icon:"//js.baletoo.cn/static/m/static/images/download.png"},
    {text:'联系巴乐兔',icon:"//js.baletoo.cn/static/m/static/images/iphone.png"},
    {text:'关于我们',icon:"//js.baletoo.cn/static/m/static/images/aboutUs.png"}
  ];
  // const [data] = useState(data1);
    return (
        <div className="mine_wrap">
        <div className="header">
            <div className="header_title" ><LeftOutlined onClick={()=>{props.history.push('../Home')}}  />
            <span className="header_mine">我的</span></div>
        </div>
        <div className="login_and_btn">
            <img src="http://js.baletoo.cn/static/m/static/images/tx.png" />
            <span className="login" onClick={()=>{props.history.push('../Login')}}>登录</span>
            <span>/</span>
            <span className="reg" onClick={()=>{props.history.push('../Reg')}}>注册</span>
        </div>
        <>
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark></Typography.Text>
          <img src={item.icon
          } className="nav_icon" /><span className="nav_text">{item.text}</span>{item.text=='联系巴乐兔'? <span>10106006</span>:<RightOutlined />}
        </List.Item>
      )}
    />
  </>
        </div>
    )
}

export default Mine;