import React from 'react'
import ExamScore from './ExamScore'

class ExamScoreList extends React.Component{
    render(){
        console.log(this.props)
        var no=0
        return(
            <>
                {
                    this.props.scoreList.map((score,index)=>{
                        return <ExamScore no={no+=1} name={score.name} score={score.score} index={index} remove={this.props.remove.bind(this,index)} />
                    })
                }
            </>
        )
    }
}

export default ExamScoreList;