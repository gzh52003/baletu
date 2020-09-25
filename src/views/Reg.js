import React,{useState,useEffect} from 'react';
import './Reg.scss';
import {LeftOutlined,RightOutlined} from '@ant-design/icons'

import { Button } from 'antd'
import request from '@/utils/request'

function Reg(props){

        // 写登录注册逻辑

    const [form,setInfo] = useState({
      username:'',
      password:''
    })

    const printValue = async(e) => {
      e.preventDefault();
      const {username,password} = form
      const data = await request.post('/reg',{username,password})
    }

    const updateField = e => {
      setInfo({
        ...form,
        [e.target.name]:e.target.value
      });
    };


    return (
        <div className="reg_wrap">
        <div className="reg_header">
            <LeftOutlined onClick={()=>{
                props.history.push('./mine')
            }} />
            <span className="wel_reg">欢迎注册</span>
        </div>



        <div className="reg_box">
        <div className="reg_username">
        <img src="//js.baletoo.cn/static/m/static/images/iphone.png"/>
        <input value={form.username} name="username" type="text" placeholder="请输入用户名" onChange={updateField}/>
        </div>
        <div className="reg_password">
         <img src="//js.baletoo.cn/static/m/static/images/iphone.png"/>
        <input value={form.password} name="password" type="password" placeholder="请输入密码" onChange={updateField}/>
        </div>
        
        </div>

        <div className="submit">
         <Button className="reg_btn" type="primary" onClick={printValue}>注册</Button>
         </div>

        </div>
    )
}

export default Reg;