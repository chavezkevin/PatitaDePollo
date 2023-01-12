import React from 'react'

function Footer() {
    return (
        <div className='footer'>

            <div className='contInfo'>
                <div className='info'>
                    <h5>nuestros locales</h5>
                    <img src={"/imagenes/house-fill.svg"} alt="" />
                </div>

                <div className='info'>
                    <h5>trabaja con nosotros</h5>
                    <img src={"/imagenes/people-fill.svg"} alt="" />
                </div>
            </div>

            <div className='contInfo2'>
                <div>
                    <div className='icons'>
                        <img src={"/imagenes/facebook.svg"}
                            alt="" />
                        <img src={"/imagenes/instagram.svg"} alt="" />
                        <img src={"/imagenes/twitter.svg"} alt="" />
                    </div>

                    <div className='telefono'>
                        <img src={"/imagenes/telephone-inbound-fill.svg"} alt="" />
                        <p>
                            3512185127
                        </p>
                    </div>
                </div>

                <div>
                    <div className='terminos'>
                        <h5>terminos</h5>
                        <h5>privacidad</h5>
                    </div>
                    <div>
                    <p>©Patita de pollo -2023</p>
                    </div>
                </div>
            </div>
            <div>
                <p>
                    pagina desarrollada por: Kevin Gabriel Chavez
                </p>
            </div>
        </div>
    )
}

export default Footer