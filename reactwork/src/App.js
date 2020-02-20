import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'


import './App.css'

import Home from './components/Home'
import Learn from './components/Learn'
import Contact from './components/Contact'
import About from './components/About'


function App (){
  return (
    <Router>
      <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       <Route path='/contact' component={Contact} />
       <Route exact path='/learn' component={Learn} />
      </Switch>
    </Router>
  )
}
 
export default App;

// class NavLink extends Componet {
//     render(){
//       return(
//          <li className={"nav-item "+ (this.props.isActive ? "active": "" )}>
//            <Link 
//            className="nav-link"
//            to={this.props.path}
//              onClick={()=> this.props.onClick()}
//            >
//              {this.props.text}</Link>
//         </li>
//       );
//     }
//   }

// class Header extends Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       links:[
//         {path:"/1", text:"Page 1", isActive: false},
//         {path:"/2", text:"Page 2", isActive: false},
//         {path:"/3", text:"Page 3", isActive: false},
//       ]
//     }
//   }
// }

// function handleClick(i) {
//   const link =this.state.links.slice();
//   for(const j in links) {
//     links[j].isActive = i == j ;
//   }
//   this.setState({links: links});
// }

// render(){
//   return(
//     <div>
//        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
//        <Link className="navbar-brand" to="/">Home</Link>
//        <ul className="navbar-nav">
//           {this.state.links.map((link, i) => 
//             <NavLink 
//               path={link.path} 
//               text={link.text} 
//               isActive={link.isActive}
//               key={link.path} 
//               onClick={() => this.handleClick(i)}
//             /> 
//            )}
//         </ul>
//         </nav>
//     </div>
//   );
// }


// const App =() => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )






