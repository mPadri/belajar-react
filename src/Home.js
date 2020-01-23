import React from 'react';
import Carousel from './Carousel';
import LoginPage from './LoginPage';
import Card from './Card';

const Home = (props) => {
    // console.log(props)
    return (
        <div>
            <div class="container mt-5">
            <div class="row">
                <div class="col-sm-8">

                    {
                        !props.login ? <LoginPage handleInput={props.input} handleLogin={props.handleLogin.bind(this)} handleOnChange={props.handleOnChange.bind(this)} /> : <Card/>
                    }

                </div>
                <div class="col-sm-4 text-left">
                    <div >
                        <Carousel/>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Home;