import React from 'react'

import BannerImg from '../../assets/imagem-banner.png'
import MailIconSrc from '../../assets/mail.svg'
import { Banner, BannerContent, BannerHeadding2, BannerHeadding4, BannerParagraph, Button, FormLabel, MailForm, MailFormContainer, MailIcon, MailInput } from './styles'

export const NewsLetter = () => {
  return (
    <Banner>
      <BannerContent>
        <BannerHeadding4>Sua casa com as </BannerHeadding4>
        <BannerHeadding2>melhores plantas</BannerHeadding2>
            <BannerParagraph>
               Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </BannerParagraph>

            <MailForm action="">
              <MailFormContainer>
                <MailIcon src={MailIconSrc} alt="newsleetter"  />
                <FormLabel htmlFor="mail-newsletter">Insira seu e-mail</FormLabel>
                <MailInput type="text" id='mail-newsletter'/>
                <Button>Assinar newsletter</Button>
              </MailFormContainer>
            </MailForm>
      </BannerContent>
      <img src={BannerImg} alt="big plant in the main page" style={{ transform: 'translate(0, -70px)'}} />
    </Banner>
  )
}
