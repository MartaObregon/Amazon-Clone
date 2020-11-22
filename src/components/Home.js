import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div>
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/gateway/placement/launch/HistoriasLamentables/LAMEN_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_es-ES._CB415731403_.jpg" alt=""></img>

                <div className="home_row">
                    <Product/>
                    {/*Product*/}
                </div>

                <div className="home_row">
                    {/*Product*/}
                    {/*Product*/}
                    {/*Product*/}
                </div>

                <div className="home_row">
                    {/*Product*/}
                    
                </div>
            </div>
        </div>
    )
}

export default Home
