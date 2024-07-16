import React from 'react'

import BannerImg from '../../assets/imagem-banner.png'
import MailIcon from '../../assets/mail.svg'

import './Newsletter.scss'

export const NewsLetter = () => {
  return (
    <section className='banner'>
        <div>
            <h4>Sua casa com as </h4>
            <h2>melhores plantas</h2>
            <p>
               Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </p>

            <form action="">
              <div>
                <img src={MailIcon} alt="newsleetter"  />
                <label htmlFor="mail-newsletter">Insira seu e-mail</label>
                <input type="text" id='mail-newsletter'/>
                <button>Assinar newsletter</button>
              </div>
            </form>
        </div>
          <img src={BannerImg} alt="big plant in the main page" />
    </section>
  )
}
