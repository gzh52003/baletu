import React,{useState,useEffect} from 'react';
import './Login.scss';
import {LeftOutlined,RightOutlined,MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'

import { Button,Menu } from 'antd'

import request from '@/utils/request'
const { SubMenu } = Menu;

function Login(props){
    // 写登录导航
    const [current,setCurrent] = useState('mail');

    const handleClick = (e)=>{
        setCurrent(e.key)
    }


    // 写登录注册逻辑

    const [form,setInfo] = useState({
      username:'',
      password:''
    })

    const printValue = async(e) => {
      e.preventDefault();
      console.log(form.username,form.password)
      const {username,password} = form
      console.log(username,password)
      const data = await request.get('/login',{username,password})

      console.log('data',data);

      if(data.code ==1){
        
        props.history.push('./mine')
         localStorage.setItem('currentUser',JSON.stringify(data.data));
      }
    }

    const updateField = e => {
      setInfo({
        ...form,
        [e.target.name]:e.target.value
      });
    };


    
    return (
        <div className="login_wrap">




                  <div className="login_header">
            <LeftOutlined onClick={()=>{
                props.history.push('./mine')
            }} className="login_nav" />
        </div>



     


    


        <div className="login_banner">
        <img src="//js.baletoo.cn/static/m/static/images/newlogo2.png?2018" />
        </div>

          
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail">
          快速登录
        </Menu.Item>
        <Menu.Item key="app">
          账号登录
        </Menu.Item>
      </Menu>


    {current=='mail'?           <div className="login_box">
        <div className="login_username">
        <img src="//js.baletoo.cn/static/m/static/images/iphone.png"/>
        <input type="text" placeholder="手机号码" />
        </div>
        <div className="login_password">
         <img src="//js.baletoo.cn/static/m/static/images/yijian.png"/>
        <input type="password" placeholder="验证码" />
        </div>
        
        </div>:<div className="login_box">
        <div className="login_username">
        <img src="//js.baletoo.cn/static/m/static/images/iphone.png"/>
        <input value={form.username} name="username" type="text" placeholder="请输入用户名" onChange={updateField}/>
        </div>
        <div className="login_password">
         <img src="//js.baletoo.cn/static/m/static/images/yijian.png"/>
        <input value={form.password} name="password" type="password" placeholder="请输入密码" onChange={updateField}/>
        </div>
        
        </div>}


        <div className="submit">
         <Button className="login_btn" type="primary" onClick={printValue}>登录</Button>
         </div>
        </div>




    )
}

export default Login;
