import React from 'react'
import {Link} from 'react-router-dom'

const Card = () => {
    return (
        <>
            <div class="row">
                <div class="col-sm-10">
                    <div class="card shadow border-warning border-bottom-0 border-left-0 border-right-0 rounded-0">
                        <div class="card-body ">
                            <h5 class="card-title">Materi React Js</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/materi">Lihat Materi</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4 mb-4">
                <div class="col-sm-10">
                    <div class="card shadow border-danger border-bottom-0 border-left-0 border-right-0 rounded-0">
                        <div class="card-body ">
                            <h5 class="card-title">Artikel</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/artikel">Lihat Artikel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card