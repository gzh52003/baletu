import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { PageHeader,Input,Row, Col, Divider,Tag } from 'antd';
import Houselist from '../components/houselist'
import {
    CaretDownOutlined,
    UserOutlined,
    SearchOutlined,
    HomeFilled,
    CopyFilled,
    InsertRowRightOutlined,
    TeamOutlined,
    AimOutlined
} from '@ant-design/icons';
import {request} from '../utils'
import './Home.scss'

function Home(){
    const homenav = [
        {
            navid:1,
            text:'整租',
            icon:<HomeFilled />,
            router:'/reg',
            color:'linear-gradient(to bottom, #fe9fa7 ,#fe6371)'
        },
        {
            navid:2,
            text:'合租',
            icon:<CopyFilled />,
            router:'/reg',
            color:'linear-gradient(to bottom, #ffcb75 ,#ffa21e)'
        },
        {
            navid:3,
            text:'品牌公寓',
            icon:<InsertRowRightOutlined />,
            router:'/reg',
            color:'linear-gradient(to bottom, #68e9e4 ,#3ad0c7)'
        },
        {
            navid:4,
            text:'找室友',
            icon:<TeamOutlined />,
            router:'/reg',
            color:'linear-gradient(to bottom, #8ac9fe ,#2d86ff)'
        },
    ]


    const [seven,setData] = useState([])
    // console.log(seven);
    useEffect(()=>{
        const recom = async function(){
            try{
                const {data} = await request.get("/house/seven")
                setData(data)
            }
            catch(err){
                console.log(err);
            }
        }
        recom()
    },[])
   

    return (
        <div style={{background:'#f0f0f0'}}>
            <div className="home_header" style={{background:'url(./img/oss_5c2497f0c4f9f.jpg) no-repeat center /100%'}}>
                <PageHeader
                    className="site-page-header"
                    title="广州"
                    subTitle={<CaretDownOutlined />}
                    extra={<Link to='/mine'><UserOutlined /></Link>}
                />
                <Input placeholder="输入区域，小区搜索房源" prefix={<SearchOutlined />} />
            </div>
            <Row gutter={24} style={{background:'#fff',margin:"0 0 15px"}}>
                {
                    homenav.map((item)=>{
                        return <Col className="gutter-row" key={item.navid} span={6}>
                            <Link to={item.router}>
                                <div style={{background:item.color}}>
                                    {item.icon}
                                </div>
                                <p>{item.text}</p>
                            </Link>
                        </Col>

                    })
                }
            </Row>
            <div className='recom' style={{background:"#fff",overflow:'hidden'}}>
                <Row gutter={24} style={{margin:"15px 0 16px"}}>
                    <Col className="gutter-row" span={12}>
                        <img src='./img/pic1h5.png'/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src='./img/pic2h5.png'/>
                    </Col>
                </Row>
                <Divider style={{margin:0}} />
                <Row gutter={24} style={{margin:"15px 0 16px"}}>
                    <Col className="gutter-row" span={12}>
                        <img src='./img/pic9h5.png'/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src='./img/pic10h5.png'/>
                    </Col>
                </Row>
                <Divider style={{margin:0}} />
            </div>
            <div style={{background:"#fff",overflow:'hidden'}}>
                <span className='guess'>猜你喜欢</span>
            </div>
            <div style={{background:"#fff",overflow:'hidden'}}>
                {
                    seven.map((item)=>{
                        return <Houselist key={item._id} item={item}/>
                    })
                }
            </div>
        </div>
    )
}

export default Home;