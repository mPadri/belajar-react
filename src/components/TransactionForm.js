import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../action/TransactionAction'
import {bindActionCreators} from 'redux'

class TransactionForm extends Component{
    state = {
        ...this.returnStateObject()
    }

    handleInputChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value

        })
    }
    handleSubmit =(e)=>{
        // e.preventDefault()
        // this.props.onAddOrEdit(this.state)

        // task redux
        e.preventDefault()
        if(this.props.currentIndex === -1){        
            this.props.addTransaction(this.state)
        }else{
            this.props.updateTransaction(this.state)
        }


    }

    returnStateObject(){
        if(this.props.currentIndex === -1){
            return {
                bAccountNo: '',
                ifSC: '',
                bName: '',
                amount: ''
            }
        }else{
            return this.props.List[this.props.currentIndex]
        }
    }
componentDidUpdate(prevProps){
    if(prevProps.currentIndex !== this.props.currentIndex || prevProps.List.length !== this.props.List.length){
        this.setState({ ...this.returnStateObject() })
    }
}

    render(){
        // console.log(this.props)
        // console.log(this.state)
        return(
            <form onSubmit={this.handleSubmit}  autoComplete="off" className="form-group">
                <input className="form-control m-2" type="text" name="bAccountNo" placeholder="A/C No" value={this.state.bAccountNo} onChange={this.handleInputChange} />
                <input className="form-control m-2" type="text" name="ifSC" placeholder="ifSC" value={this.state.ifSC} onChange={this.handleInputChange} />
                <input className="form-control m-2" type="text" name="bName" placeholder="bName" value={this.state.bName} onChange={this.handleInputChange} />
                <input className="form-control m-2" type="text" name="amount" placeholder="amount" value={this.state.amount} onChange={this.handleInputChange} />
                <button className="btn btn-primary m-2" type="submit">submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        List: state.list,
        currentIndex: state.currentIndex
    }
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        addTransaction : action.insert,
        updateTransaction: action.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)