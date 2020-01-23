import React from 'react';
import './App.css'
import Foto from './assets/image/user.png'
import Award from './assets/icon/award.svg'
class User extends React.Component {
    render() {
        return (
            <div className="App">
                {/* User {this.props.username}                */}

                <img src={Foto} alt="foto" class="mt-5" />
                <h4 className="mt-3">{this.props.username}</h4>
                <blockquote class="blockquote">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer"><cite title="Source Title">bastian@gmail.com</cite></footer>
                </blockquote>
                <div>
                    <span class="badge badge-danger m-2">HTML 5</span>|
                    <span class="badge badge-primary m-2">CSS 3</span>|
                    <span class="badge badge-warning m-2">Javascript</span>|
                    <span class="badge badge-info m-2">React Js</span>
                </div>
                <div>
                <p className="mt-2"><i>Score : </i><b>10</b> <img src={Award} width="20" height="20" alt="foto"/> </p>
                </div>
            </div>
        )
    }
}
export default User;
