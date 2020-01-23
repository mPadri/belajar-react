import React from 'react'

class ExamScore extends React.Component {
    render() {
        // let style1 = {
        //     'padding-left': '25px'
        // }
        // console.log(this.props)

        return (
            <>
                {/* <div style={style1}>{this.props.name}</div>
                <div class="col-md-6 text-right">{this.props.score}</div>
                {
                    this.props.index == 0 || this.props.index > 0 ?
                    <button onClick={this.props.remove} >Hapus</button> 
                    : ''
                    
                } */}



                <tr key={this.props.index}>
                    <th scope="row">{this.props.no}</th>
                    <td>{this.props.name}</td>
                    <td>{this.props.score}</td>
                    <td>
                        {
                            this.props.index === 0 || this.props.index > 0 ?
                                <button class="btn btn-danger btn-sm" onClick={this.props.remove} >Hapus</button>
                                : ''

                        }
                    </td>
                </tr>


            </>
        )
    }
}

export default ExamScore;