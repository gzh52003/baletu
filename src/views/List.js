import React from 'react';
import { NavBar, ListView , Tag, Tabs, Drawer, icon ,SearchBar, WingBlank, WhiteSpace } from 'antd-mobile';
import request from '../utils/request'

import 'antd-mobile/dist/antd-mobile.css';
import './List.scss'
const tabs = [
    { title: '位置 ∨' },
    { title: '租金 ∨' },
    { title: '整租 ∨' },
    { title: '更多 ∨' },
  ];
const Data = [
    // {
    //   img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    //   title: 'Meet hotel',
    //   des: '不是所有的兼职汪都需要风吹日晒',
    // },
    // {
    //   img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    //   title: 'McDonald\'s invites you',
    //   des: '不是所有的兼职汪都需要风吹日晒',
    // },
    // {
    //   img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    //   title: 'Eat the week',
    //   des: '不是所有的兼职汪都需要风吹日晒',
    // },
  ];
  const NUM_ROWS = 20;
  let pageIndex = 0;
  function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
      const ii = (pIndex * NUM_ROWS) + i;
      dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
  }

class List extends React.Component{
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
    
        this.state = {
          dataSource,
          isLoading: true,
        };
      }
      async componentDidMount() {
          const {data} = await request.get('list')
          this.Data = [...data]
          console.log("Data=",this.Data)

        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 600);
      }
      onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.rData = { ...this.rData, ...genData(++pageIndex) };
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 1000);
      }
    render(){
        let index = Data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
            index = Data.length - 1;
            }
            const obj = Data[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                        <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                        <div style={{ lineHeight: 1 }}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                        <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <div>
                <NavBar
                    mode="light"
                    leftContent={<i className={`iconfont icon-shouye`} style={{color:'#fff',fontWeight:"bold",fontSize:20}}></i>}
                    rightContent={<i className={`iconfont icon-wode`} style={{color:'#fff',fontSize:22}}></i>}
                    style={{backgroundColor:'#ee3943'}}
                >
                <div className={'place'}>
                    <p>上海</p>
                    <i className={'iconfont icon-jiantou'}></i>
                </div>
                <div>
                    <input type="text" placeholder="输入区域，小区搜索房源" style={{borderRadius:5,border:'none',paddingLeft:10,fontSize:12,height:28,width:205}}/>
                </div>
                </NavBar>
                <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false} tabBarUnderlineStyle={{display:'none'}} tabBarInactiveTextColor='#5a5c5d'
                tabBarActiveTextColor='#ee3943'
                tabBarTextStyle={{fontSize:'.26rem'}}
                >
                </Tabs>
                <div className="tag-container">
                    <Tag disabled>租金月付</Tag>
                    <Tag disabled>近地铁</Tag>
                    <Tag disabled>带阳台</Tag>
                    <Tag disabled>平台认证</Tag>
                </div>
                    
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderRow={row}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10} 
                />
            </div>
        );
    }
}

export default List;