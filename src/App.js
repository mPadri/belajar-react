import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Grid, Segment, Card, Button, Form, Icon } from 'semantic-ui-react';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dataKaryawan:[],
      edit:false,
      dataPost:{
        id:0,
        nama_karyawan:"",
        jabatan:"",
        jenis_kelamin:"",
        tanggal_lahir:""
      }
    }
  }

  reloadData =()=>{
    axios.get("http://localhost:3004/data-karyawan")
    .then(res=>{
      this.setState({
        dataKaryawan: res.data,
        edit: false
      })
    })
  }

  clearData =()=>{
    let newdataPost = {...this.state.dataPost}
    newdataPost['id'] =""
    newdataPost['nama_karyawan'] =""
    newdataPost['jabatan'] =""
    newdataPost['jenis_kelamin'] =""
    newdataPost['tanggal_lahir'] =""

    this.setState({
      dataPost: newdataPost
    })
  }
  
  componentDidMount(){
    this.reloadData()
  }

  inputChange =(e)=>{
    let newdataPost = {...this.state.dataPost}

    if(this.state.edit === false){
      newdataPost['id'] = new Date().getTime()
    }
    newdataPost[e.target.name] = e.target.value

    this.setState({
      dataPost: newdataPost
    })
  }

  onSubmitForm =()=>{
    if(this.state.edit === false){
      axios.post("http://localhost:3004/data-karyawan", this.state.dataPost)
      .then(()=>{
        this.reloadData()
        this.clearData()
      })
    }else{
      axios.put(`http://localhost:3004/data-karyawan/${this.state.dataPost.id}`,this.state.dataPost)
      .then(()=>{
        this.reloadData()
        this.clearData()
      })
    }
    
  }

  handleRemove =(e)=>{
    // console.log(e.target.value)
    axios.delete(`http://localhost:3004/data-karyawan/${e.target.value}`,{method:"DELETE"})
    .then(()=>{
      this.reloadData()
    })
  }

  getDataId =(e)=>{
    axios.get(`http://localhost:3004/data-karyawan/${e.target.value}`)
    .then(res=>{
      // console.log(res.data)
      this.setState({
        dataPost: res.data,
        edit:true
      })
    })
  }
  
 render(){
  return (
    <div>
      <Segment inverted color="blue" padded>
        <Header as="h2">
          <Icon name="users" />
          Data Karyawan
          </Header>
      </Segment>

      <Grid centered divided>
        <Grid.Row>
          <Grid.Column width={6}>
            <Segment>
              <Form>
                <Form.Field>
                  <label>Nama</label>
                  <input type="text" name="nama_karyawan" value={this.state.dataPost.nama_karyawan} placeholder="Nama" onChange={this.inputChange} />
                </Form.Field>
                <Form.Field>
                  <label>Jabatan</label>
                  <input type="text" name="jabatan" value={this.state.dataPost.jabatan} placeholder="Jabatan" onChange={this.inputChange}/>
                </Form.Field>
                <Form.Field>
                  <label>Jenis Kelamin</label>
                  <input type="text" name="jenis_kelamin" value={this.state.dataPost.jenis_kelamin} placeholder="Jenis Kelamin" onChange={this.inputChange}/>
                </Form.Field>
                <Form.Field>
                  <label>Tanggal Lahir</label>
                  <input type="date" name="tanggal_lahir" value={this.state.dataPost.tanggal_lahir} onChange={this.inputChange}/>
                </Form.Field>
                <Button basic color="blue" onClick={this.onSubmitForm} >
                  <Icon name="save" />
                  Save Data
                  </Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Card.Group itemsPerRow={2}>
          {this.state.dataKaryawan.map((data,index)=>{
            return(
              
                <Card key={index} raised>
                  <Card.Content>
                    <Card.Header>{data.nama_karyawan}</Card.Header>
                    <Card.Meta>{data.jabatan}</Card.Meta>
                    <Card.Description>
                      <p>Jenis Kelamin : {data.jenis_kelamin}</p>
                      <p>Tanggal Lahir : {data.tanggal_lahir}</p>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button basic color="green" onClick={this.getDataId} value={data.id} >
                      <Icon name="edit" />
                      Edit
                      </Button>
                    <Button basic color="red" onClick={this.handleRemove} value={data.id} >
                      <Icon name="trash" />
                      Delete
                      </Button>
                  </Card.Content>
                </Card>
            )
          })} 
          </Card.Group>
            </Grid.Column>

          
        </Grid.Row>
        {/* <Grid.Row>

          {this.state.dataKaryawan.map((data,index)=>{
            return(
              <Grid.Column key={index} width={4}>
                <Card>
                  <Card.Content>
                    <Card.Header>{data.nama_karyawan}</Card.Header>
                    <Card.Meta>{data.jabatan}</Card.Meta>
                    <Card.Description>
                      <p>{data.jenis_kelamin}</p>
                      <p>{data.tanggal_lahir}</p>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button color="green" onClick={this.getDataId} value={data.id} >Edit</Button>
                    <Button color="red" onClick={this.handleRemove} value={data.id} >Delete</Button>
                  </Card.Content>
                </Card><br/>
              </Grid.Column>
            )
          })} 

        </Grid.Row> */}
      </Grid>
    </div>
  );
 }
}

export default App;
