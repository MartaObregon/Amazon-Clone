import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/gateway/placement/launch/HistoriasLamentables/LAMEN_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_es-ES._CB415731403_.jpg" alt=""></img>

                <div className="home_row">
                    <Product id ="1" title = 'Loungefly Star Wars Baby Yoda en cuna The Mandalorian Womens doble correa hombro bolso bolso' 
                    price={73.31} 
                    image="https://m.media-amazon.com/images/I/71kbhZBe3TL._AC_UL320_.jpg"
                    rating={5}
                    />
                    <Product id ="2" title ="Star Wars Baby Yoda The Child Peluche, Hasbro F11155L0"
                    price={25.99}
                    image="https://m.media-amazon.com/images/I/818oIOvRL+L._AC_UL320_.jpg"
                    rating={4}
                    />
                    
                </div>

                <div className="home_row">
                <Product  id ="3"  title="Baby Yoda Star Wars 3 pares de calcetines"
                    price={14.99}
                    image="https://m.media-amazon.com/images/I/91OChWeteOL._AC_UL320_.jpg"
                    rating={2}
                />
                <Product  id="4" title="Star Wars: The Mandalorian MGC25850 - Taza de cerámica (315 ml), diseño con texto en inglés"
                    price={10.95}
                    image='https://m.media-amazon.com/images/I/61OoeIoWwOL._AC_UL320_.jpg'
                    rating={4}
                />
                <Product id="5" title="Star Wars - Funda para móvil Baby Yoda 006 Samsung S10 Plus"
                    price={17.95}
                    image='https://m.media-amazon.com/images/I/71s8f01ye5L._AC_UL320_.jpg'
                    rating={5}
                />
                </div>

                <div className="home_row">
                <Product id="6" title="Grupo Erik - Alfombrilla de ratón XL Baby Yoda, The Mandalorian (35x80 cm)"
                    price={19.99}
                    image="https://m.media-amazon.com/images/I/61bDAiuLpGL._AC_UL320_.jpg"
                    rating={5}
                />
                    
                </div>
            </div>
        </div>
    )
}

export default Home
