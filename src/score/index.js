import React from 'react'
import ExamScoreList from './ExamScoreList';
// import ExamScore from './ExamScore';
import ExamScoreTerbaik from './ExamScoreTerbaik';

class ExamScoreDisp extends React.Component {
    constructor() {
        super()
        this.state = {
            scoreList: [
                { name: 'Bagus', score: 10 },
                { name: 'Heri', score: 9 },
                { name: 'Saitama', score: 8 }
            ],
            inputName: '',
            inputScore: 0
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onScoreChange = this.onScoreChange.bind(this);
        this.updateClick = this.updateClick.bind(this);
    }

    findMaxIndex(arr) {
        var nIndex = -1;
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (i === 0) {
                    nIndex = i;
                } else if (parseInt(arr[nIndex].score) < parseInt(arr[i].score)) {
                    nIndex = i;
                }
            }
            return nIndex;
        }
    }

    onNameChange(e) {
        this.setState({
            inputName: e.target.value
        })
    }

    onScoreChange(e) {
        this.setState({
            inputScore: e.target.value
        })
    }

    updateClick() {
        console.log('lenght Before Update' + this.state.scoreList.length)
        console.log('New Name' + this.state.inputName)

        let newScores = this.state.scoreList

        var newData = {
            name: this.state.inputName,
            score: this.state.inputScore
        }

        newScores.push(newData)

        this.setState({
            scoreList: newScores,
            inputName: '',
            inputScore: 0
        })
    }

    handleRemove = (index) => {
        console.log(index)

        const newData = this.state.scoreList
        newData.splice(index, 1)

        this.setState({
            scoreList: newData
        })
    }


    render() {
        let maxIndex = this.findMaxIndex(this.state.scoreList)
        console.log('index' + maxIndex)

        let maxData = this.state.scoreList[maxIndex]
        console.log(maxData)

        return (
            <div>
                <div>
                    <h3 class="mt-3 ml-5 mb-4"><i>List Scores</i></h3>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="container">
                                    <ExamScoreTerbaik name={maxData ? maxData.name : ''} score={maxData ? maxData.score : ''} />
                                    <table class="table table-striped mt-3">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nama</th>
                                                <th scope="col">Score</th>
                                                <th scope="col">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <ExamScoreList scoreList={this.state.scoreList} remove={this.handleRemove} />
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div>
                                    <h5>Input Data</h5>
                                    <form>
                                        <div class="form-group col-md-6">
                                            <label>Nama</label>
                                            <input class="form-control" type="text" onChange={this.onNameChange} value={this.state.inputName} />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label>Nilai</label><br />
                                            <input class=" form-control" type="text" onChange={this.onScoreChange} value={this.state.inputScore} />
                                        </div>

                                    </form>
                                    <div class="col-md-4">
                                        <button class="btn btn-info" onClick={this.updateClick} >Tambah Data</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    {/* <ExamScore name={maxData ? maxData.name : ''} score={maxData ? maxData.score : ''} /> */}

                </div>
            </div>
        )
    }
}

export default ExamScoreDisp;