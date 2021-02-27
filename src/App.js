import react,{Component, useState} from 'react';
import './App.css';
import axios from 'axios' 
import {button,form,formgroup,label,input, Alert}
from 'reactstrap';
import login from './login';

class App extends Component {

  constructor(props){
     super(props);
     this.state={ backendResponse:""};
   
  }
callbackend() {
  fetch("http://localhost:9000/testAPI")
  .then(res=>res.text())
  .then(res=>this.setState({backendResponse:res}))
  .catch(err => err);
}

componentDidMount(){
  this.callbackend();
}
routerChange(){
  let path='welcome.php';
  this.props.history.push(path);
}

gotohome=()=>{
  const { email,password}=this.state
  if(email==password){
    this.props.navigation.naigate("login")
  
  }else{
    Alert("plse enter correct email/password")
  }
}

  render () {
  
    return ( 
    <html>
    <form className="base-container" action='./login'>
      
     <body brground="skyblue">
      
     <h1 className="text-center">my website.com</h1>
     <h2 className="text-center">welcome</h2>
     <formgroup onsubmit={(e) =>login(e)}>
       <div>
       <label className="input">email</label>
       </div>
       <input type="email"  name="email" value={this.state.username} onChange={this.handleemailchange} placeholder="email"/>
     </formgroup>
<div>
     <formgroup>
       <div>
       <label className="input">password</label>
       </div>
       <input type="text" name="pass" placeholder="password"/>
     </formgroup>
    </div>
    <div>
     <button onpress={()=>this.gotohome()} className="submit" onClick="login(e)">log in</button>
     <switch>
       <router path="/login" component={login}/>
     </switch>
  </div>
  
  </body>
    </form>
    </html>
    )
}
}

function myfunction (e) {
  e.preventdefault();
  let request ={
    email:document.getElementById('email').Value,
    password:document.getElementById('password').value
  }
  axios.post('http://localhost:3000/login',request)
  .then(resp => {
    alert(resp.data.message)
  })
}


export default App;
