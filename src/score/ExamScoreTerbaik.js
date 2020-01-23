import React from 'react'
import Award from '../assets/icon/award.svg';
class ExamScoreTerbaik extends React.Component{
    render(){
        return(
            <div>
                <h5><img src={Award} alt="logo" width="25" height="25" /> {this.props.name} <span>{this.props.score}</span> </h5>
            </div>
        )
    }
}

export default ExamScoreTerbaik