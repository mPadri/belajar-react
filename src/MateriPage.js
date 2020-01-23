import React from 'react'
import axios from 'axios'
import Modal from './utils/Modal';
import {Link} from 'react-router-dom'

class MateriPage extends React.Component {

    state = {
        posts: [],
        dataPost: {
            id: 0,
            title: "",
            body: ""
        },
        edit: false
    }

    getData = () => {
        axios.get('http://localhost:3001/posts/')
            .then(res => {
                // console.log(res.data)

                this.setState({
                    posts: res.data,
                    edit: false
                })
            })
    }

    getDataId = (e) => {
        axios.get(`http://localhost:3001/posts/${e.target.value}`)
            .then(res => {
                // console.log(res.data)

                this.setState({
                    dataPost: res.data,
                    edit: true
                })
            })
    }

    clearDataId =()=>{
        this.setState({
            dataPost: {
                id: 0,
                title: "",
                body: ""
            },
            edit: false
        })
    }

    onChangeValue = (e) => {
        // console.log(e.target.value)
        let newDataPost = { ...this.state.dataPost }

        if (this.state.edit === false) {

            newDataPost['id'] = new Date().getTime()
        }
        newDataPost[e.target.name] = e.target.value

        this.setState({
            dataPost: newDataPost
        })
    }

    clearForm = () => {
    
        this.setState({
            dataPost: {
                id: 0,
                title: "",
                body: ""
            }
        })
    }

    formSubmit = () => {
        if (this.state.edit === false) {
            axios.post("http://localhost:3001/posts/", this.state.dataPost)
                .then(() => {
                    this.getData()
                    this.clearForm()
                })
        } else {
            axios.put(`http://localhost:3001/posts/${this.state.dataPost.id}`, this.state.dataPost)
                .then(() => {
                    this.getData()
                    this.clearForm()
                })
        }

    }

    handleRemove = (e) => {
        e.preventDefault()

        axios.delete(`http://localhost:3001/posts/${e.target.value}`)
            .then(() => this.getData())
    }

    componentDidMount() {
        this.getData()
    }
    render() {
        let i = 0
        return (
            <div>
                <h3 class="mt-3 ml-5 mb-4"><i>Materi</i></h3>
                <div class="container">
                    <button className="btn btn-primary m-2" data-toggle="modal" data-target="#exampleModal" >Tambah Data</button>
                    <Modal clearDataId={this.clearDataId} titleModal={this.state.edit} valueForm={this.state.dataPost} input={this.onChangeValue} submit={this.formSubmit} />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Judul Materi</th>
                                <th scope="col">Penulis</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>

                        <tbody>
                            {

                                this.state.posts.map((post) => {
                                    return (
                                        <tr key={post.id}>
                                            <th scope="row">{i += 1}</th>
                                            <td><Link to={`/materi/${post.id}`}>{post.title}</Link></td>
                                            <td>{post.body}</td>
                                            <td>
                                                <button value={post.id} className="btn btn-danger" onClick={this.handleRemove} >hapus</button>
                                                <button value={post.id} className="btn btn-success ml-2" data-toggle="modal" data-target="#exampleModal" onClick={this.getDataId} >edit</button>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default MateriPage