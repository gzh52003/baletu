import React,{Suspense, lazy} from 'react';
import './App.css';
import {withRouter,BrowserRouter,Route,Redirect,Switch,Link,NAVLink} from 'react-router-dom';
// @withRouter




import Home from './views/Home'

const Reg = lazy(() => import("./views/Reg"))
const Login = lazy(() => import("./views/Login"))
const List = lazy(() => import("./views/List"))
const Mine = lazy(() => import("./views/Mine"))
const Single = lazy(() => import("./views/Single"))



import {Menu,Row,Col,Button} from 'antd'
class App extends React.Component{
  state = {
  }
   render(){
    return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/reg" component={Reg} />  
        <Route path="/login" component={Login} />  
        <Route path="/mine" component={Mine} />  
        <Route path="/list" component={List} />  
        <Route path="/single" component={Single} /> 
        <Route path="/notfound" render={() => <div>404</div>} />
        <Redirect from="/" to="/home" exact />
      </Switch>
    </Suspense>
  );
}
}
export default App;
