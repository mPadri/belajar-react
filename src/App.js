import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataApi: [],
      edit: false,
      dataPost:{
        id:0,
        title:"",
        body:""
      }
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.reloadData = this.reloadData.bind(this)
  }

// get data 
  reloadData(){
    axios.get("http://localhost:3004/posts/")
      .then(res => {
        this.setState({
          dataApi: res.data,
          edit: false
        })
      })
  }

// post data step 1
  // inputChange =(e)=>{
    // console.log(e.target.value)

    // step 1 *tanda ... atau spread operator untuk menduplikat
  //   let newdataPost = {...this.state.dataPost}
  //   newdataPost['id'] = new Date().getTime()
  //   newdataPost[e.target.name] = e.target.value
  //   // step 2
  //   this.setState({
  //     dataPost: newdataPost
  //   }, 
  //     ()=> console.log(this.state.dataPost)
  //   )
  // }

// post data step 2
  // onSubmitForm =()=>{
  //   axios.post("http://localhost:3004/posts/",this.state.dataPost)
  //   .then(() =>{
  //     this.reloadData()
  //   })
  // }

  inputChange =(e)=>{
    // console.log(e.target.value)

    // step 1 *tanda ... atau spread operator untuk menduplikat
    let newdataPost = {...this.state.dataPost}

    if(this.state.edit === false){
      newdataPost['id'] = new Date().getTime()
    }
    
    newdataPost[e.target.name] = e.target.value
    // step 2
    this.setState({
      dataPost: newdataPost
    }, 
      ()=> console.log(this.state.dataPost)
    )
  }

  clearData =()=>{
    let newdataPost = {...this.state.dataPost}
    newdataPost['id'] ="";
    newdataPost['body'] = "";
    newdataPost["title"] = "";

    this.setState({
      dataPost: newdataPost
    })
  }

  onSubmitForm =()=>{

    if(this.state.edit === false){
      axios.post("http://localhost:3004/posts/",this.state.dataPost)
      .then(() =>{
        this.reloadData()
        this.clearData()
      })

    }else{
      axios.put(`http://localhost:3004/posts/${this.state.dataPost.id}`,this.state.dataPost)
      .then(()=>{
        this.reloadData()
        this.clearData()
      })
    }
  }

  

  getDataId = (e)=>{
    axios.get(`http://localhost:3004/posts/${e.target.value}`)
    .then((res)=>{
      // console.log(res)
      this.setState({
        dataPost:res.data,
        edit: true
      })
    })
  }

// delete data
  handleRemove(e){
    // console.log(e.target.value)
    fetch(`http://localhost:3004/posts/${e.target.value}`,{method:"DELETE"})
    .then(() => this.reloadData())
  }

  componentDidMount() {
    // get data menggunkan fetch

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response=>response.json())
    // .then(res => {
    //   this.setState({
    //     dataApi: res
    //   })
    // })

    // get data menggunakan axios

    // axios.get("http://localhost:3004/posts/")
    //   .then(res => {
    //     this.setState({
    //       dataApi: res.data
    //     })
    //   })
    this.reloadData()
  }
  render() {
    return (
      <div>
        <input type="text" name="body" value={this.state.dataPost.body} placeholder="masukkan body" onChange={this.inputChange} />
        <input type="text" name="title" value={this.state.dataPost.title} placeholder="masukkan title" onChange={this.inputChange} />
        <button type="submit" onClick={this.onSubmitForm}>Save data</button>
        {this.state.dataApi.map((data, index) => {
          return (
            <div key={index}>             
              <p>{data.title}</p>
              <button value={data.id} onClick={this.handleRemove}>Delete</button>
              <button value={data.id} onClick={this.getDataId}>Edit</button>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
