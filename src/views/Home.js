import React from 'react';
import { PageHeader,Input,Row, Col, Divider } from 'antd';
import {
    CaretDownOutlined,
    UserOutlined,
    SearchOutlined,
    HomeFilled,
    CopyFilled,
    InsertRowRightOutlined,
    TeamOutlined
} from '@ant-design/icons';

import './Home.scss'


function Home(){
    const homenav = [
        {
            navid:1,
            text:'整租',
            icon:<HomeFilled />,
            color:'linear-gradient(to bottom, #fe9fa7 ,#fe6371)'
        },
        {
            navid:2,
            text:'合租',
            icon:<CopyFilled />,
            color:'linear-gradient(to bottom, #ffcb75 ,#ffa21e)'
        },
        {
            navid:3,
            text:'品牌公寓',
            icon:<InsertRowRightOutlined />,
            color:'linear-gradient(to bottom, #68e9e4 ,#3ad0c7)'
        },
        {
            navid:4,
            text:'找室友',
            icon:<TeamOutlined />,
            color:'linear-gradient(to bottom, #8ac9fe ,#2d86ff)'
        },
    ]
    return (
        <div style={{background:'#f0f0f0'}}>
            <div className="home_header" style={{background:'url(./img/oss_5c2497f0c4f9f.jpg) no-repeat center /100%'}}>
                <PageHeader
                    className="site-page-header"
                    title="广州"
                    subTitle={<CaretDownOutlined />}
                    extra={<UserOutlined />}
                />
                <Input placeholder="输入区域，小区搜索房源" prefix={<SearchOutlined />} />
            </div>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} style={{background:'#fff'}}>
                {
                    homenav.map((item)=>{
                        return <Col className="gutter-row" span={6}>
                            <div style={{background:item.color}}>
                                {item.icon}
                            </div>
                            <p>{item.text}</p>
                        </Col>

                    })
                }
            </Row>
        </div>
    )
}

export default Home;