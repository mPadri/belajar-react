import React from 'react'
import Gambar1 from './assets/image/browser1.svg'
import Gambar2 from './assets/image/browser2.svg'
import Gambar3 from './assets/image/browser3.svg'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Gambar1} class="d-block w-100" alt="gambar1" />
                    </div>
                    <div class="carousel-item">
                        <img src={Gambar2} class="d-block w-100" alt="gambar2" />
                    </div>
                    <div class="carousel-item">
                        <img src={Gambar3} class="d-block w-100" alt="gambar3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel