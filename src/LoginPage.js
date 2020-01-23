import React from 'react'

const LoginPage = (props) => {

    let {username,password}= props.handleInput
    // console.log(username)
    // console.log(password)

    return (
        <>
            <h2>Log In</h2>
            <form>
                <div class="form-group col-md-6">
                    <label>Username</label>
                    <input class="form-control" type="text" name="username" value={username} onChange={props.handleOnChange} required />
                </div>
                <div class="form-group col-md-6">
                    <label>Password</label><br />
                    <input class=" form-control" type="password" name="password" value={password} onChange={props.handleOnChange} required />
                </div>

            </form>
            <div class="col-md-4">
                <button class="btn btn-primary" onClick={props.handleLogin} >Log In</button>
            </div>
        </>
    )
}

export default LoginPage