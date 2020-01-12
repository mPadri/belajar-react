import React, { Component } from 'react'
import TransactionForm from './TransactionForm';
import {connect} from 'react-redux'
import * as action from '../action/TransactionAction'
import {bindActionCreators} from 'redux'

class TransactionList extends Component {
    // state = {
    //     currentIndex: -1,
    //     list: this.returnList()
    // }

    // harus function biasa
    // returnList() {
        // console.log(localStorage.getItem(''))
    //     if (localStorage.getItem('transaction') === null) {
    //         localStorage.setItem('transaction', JSON.stringify([]))
    //     }

    //     return JSON.parse(localStorage.getItem('transaction'))

    // }
    // onAddorEdit = (data) => {
    //     var list = this.returnList()
    //     if(this.state.currentIndex === -1){
            
    //         list.push(data)
    //     }else{
    //         list[this.state.currentIndex] = data
    //     }

    //     localStorage.setItem('transaction', JSON.stringify(list))
    //     this.setState({
    //         list,
    //         currentIndex: -1
    //     })
    //     console.log(this.state)

    // }

    handleEdit=(index)=>{
        // this.setState({
        //     currentIndex: index
        // })
        // console.log(this.state.currentIndex)

        // task redux
        this.props.updateIndex(index)
    }

    handleDelete=(index)=>{
        // var list = this.returnList()
        // // console.log(list)
        // list.splice(index,1)
        // localStorage.setItem('transaction', JSON.stringify(list))
        // this.setState({
        //     list,
        //     currentIndex: -1
        // })

        // task redux
        this.props.deleteTransaction(index)


    }
    render() {
        return (
            <div>
                {/* <TransactionForm onAddOrEdit={this.onAddorEdit} currentIndex={this.state.currentIndex} list={this.state.list} /> */}
                <TransactionForm />
                <hr />
                list of transaction
                <table className="table">
                    <thead>
                        <tr>
                            <th>A/C No</th>
                            <th>ifSC</th>
                            <th>bName</th>
                            <th>amount</th>
                            <th>action</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {
                            this.props.List.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{item.bAccountNo}</td>
                                        <td>{item.ifSC}</td>
                                        <td>{item.bName}</td>
                                        <td>{item.amount}</td>
                                        <td>
                                            <button className="btn btn-success btn-sm m-2" onClick={()=>this.handleEdit(index)}>edit</button>
                                            <button className="btn btn-danger btn-sm m-2" onClick={()=>this.handleDelete(index)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        List: state.list
    }
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        deleteTransaction : action.Delete,
        // penulisan tanpa bindActionCreators
        // addTransaction : (data) => dispatch(action.insert(data)),
        updateIndex: action.updateIndex
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)