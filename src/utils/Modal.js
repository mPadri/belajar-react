import React from 'react'

class Modal extends React.Component {
    render() {
        return (
            <>
                <div class="modal fade" tabindex="-1" role="dialog" id="exampleModal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{!this.props.titleModal ? 'Tambah Data' : 'Edit Data'}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.props.clearDataId}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Judul</label>
                                        <input name="title" value={this.props.valueForm.title} class="form-control" type="text" onChange={this.props.input} />
                                    </div>
                                    <div class="form-group">
                                        <label>Penulis</label><br />
                                        <input name="body" value={this.props.valueForm.body} class="form-control" type="text" onChange={this.props.input} />
                                    </div>

                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.clearDataId}>batal</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.props.submit} >simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal