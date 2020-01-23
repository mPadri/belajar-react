import React, {Component} from 'react'
import axios from 'axios'

class DetailMateri extends Component{

   state={
       detailMateri:{
           title: '',
           body:''
       }
   }

    componentDidMount(){
        // console.log(this.props.detailMateri)
        let id = this.props.detailMateri
        axios.get(`http://localhost:3001/posts/${id}`)
        .then(res=>{
            // console.log(res)
            this.setState({
                detailMateri:{
                    title: res.data.title,
                    body: res.data.body
                }
            })
        })
    }

    render(){
        
        return(
            <div>
                <p>{this.state.detailMateri.title}</p>
                <p>{this.state.detailMateri.body}</p>
            </div>
        )
    }
}

export default DetailMateri