import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Redirect, Prompt, Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import User from './User'
import 'bootstrap/dist/css/bootstrap.min.css';
import Score from './score/';
import Foto from './assets/image/user.png';
import Award from './assets/icon/award.svg';
import Beranda from './assets/icon/house.svg';
import Home from './Home';
import ArtikelPage from './ArtikelPage';
import MateriPage from './MateriPage';
import DetailMateri from './DetailMateri';



class App extends Component {
  state = {
    username: '',
    password: '',
    loggedIn: false
  };
  onLoginClick = () => {
    const {username, password,loggedIn} = this.state

    if(username === 'admin' && password === '1234' && loggedIn === false){
      
      this.setState(prevState => ({
        loggedIn: !prevState.loggedIn,
      }))
    }else{
      this.setState({
        username:'',
        password:'',
        loggedIn:false
      })
    }
  }

  onChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  render() {

    return (
      <div>
        <Router>

          <nav class="navbar navbar-expand-lg navbar-dark shadow" style={{backgroundColor: '#8000ff'}}>
            <p class="navbar-brand">Bima Camp</p>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav mr-auto">
                <li class="nav-item nav-link active"><Link class="text-white" to="/"><img src={Beranda} width="25" height="25" alt="foto" class="mr-2" /></Link></li>
                <li class="nav-item nav-link"><Link to="/score"><img src={Award} width="25" height="25" alt="foto" class="mr-2" /></Link></li>
              </div>
              {
                this.state.loggedIn === true ?
                
                <li class="nav-item nav-link ml-auto mr-3">
                  <Link to={`/user/${this.state.username}`} class="text-white"><img src={Foto} width="25" height="25" alt="foto" class="mr-2" /> {this.state.username} </Link>
                </li> :
                ""
              }
              {
                !this.state.loggedIn? "" :
              <input className="btn btn-light btn-sm ml-5 mr-2" type="button" value={this.state.loggedIn ? 'Log out' : 'Log in'} onClick={this.onLoginClick.bind(this)} />
              }
            </div>
          </nav>

          <Prompt
            when={!this.state.loggedIn}
            message={(location) => {
              return location.pathname.startsWith('/user') ? 'Anda Belum login?' : true
            }}
          />

          <Route path="/" exact render={
            () => {
              return (
                <>
                  {/* <h1>Halaman Utama</h1> */}
                  <Home input={this.state} login={this.state.loggedIn} handleLogin={this.onLoginClick} handleOnChange={this.onChange}/>
                </>
              )

            }} />

          {/* <Route path="/score" exact strict render={
            () => {
              return <h1>About</h1>
            }} /> */}

          <Route path='/score' component={Score} />
          <Route path='/artikel' component={ArtikelPage} />
          <Route path='/materi' exact component={MateriPage} />
          <Route path="/materi/:id" exact component={({match})=>(
            <DetailMateri detailMateri={match.params.id} />
          )} />

          <Route path="/user/:username" exact strict render={({ match }) => (
            this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to='/' />)
          )} />

         
        </Router>

      </div>
    );
  }
}
export default App;
