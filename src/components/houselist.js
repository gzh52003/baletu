import React from 'react'
import {Link} from 'react-router-dom';
import { PageHeader,Input,Row, Col, Divider,Tag } from 'antd';
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

function Houselist(props){
    return(
    <div className="youLike">
        <Row gutter={24} style={{margin:"0"}}>
            <Col className="gutter-row" span={8} style={{padding: '12.5px 0',position:'relative'}}>
                <img src={'./img/'+props.item.house_main_image}/>
                <p className="desc">{props.item.house_img_source}:{props.item.house_photo_num}</p>
            </Col>
            <Col className="gutter-row2" span={16} style={{padding: '12.5px 0',position:'relative'}}>
                <h2>{props.item.house_title}</h2>
                <span style={{color:'#ea3943',margin:'8px 0 0',fontSize:12}}>按日退租·七日退款</span>
                <span style={{fontSize:12,color:'#666'}}><AimOutlined style={{display:'inline',margin:'0 12px 0 0'}} />{props.item.house_address_desc}</span>
                {
                    props.item.house_tags.map((i,idx)=>{
                        console.log(idx);
                        // <span >{i}</span>
                        return idx !== props.item.house_tags.length-1?<Tag key={idx} className='house-tag'>{i}</Tag>:<Tag key={idx} className='house-tag' style={{margin:0}}>{i}</Tag>
                    })
                }
                <span style={{color:"#ea3943",fontSize:17}}>{props.item.month_rent}元</span>
            </Col>
        </Row>
    </div>
    )
}
export default Houselist
