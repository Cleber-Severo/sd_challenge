import React from 'react'

import BannerImg from '../../assets/imagem-banner.png'
import MailIconSrc from '../../assets/mail.svg'

import styled from 'styled-components'

const Banner = styled.section`
  display: flex;

  background: {
    image: url('assets/imagem-banner.png');
    position: right bottom;
    size: 787px;
    repeat: no-repeat;
  }

  padding-top: 80px;
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
`

const BannerHeadding4 = styled.h4`
  font-size: 22px;
  font-weight: 400;
  color: ${props => props.theme.color.primary.main};
  margin: 0;
  width: 100%;
`

const BannerHeadding2 = styled.h2`
  color: ${props => props.theme.color.primary.main};
  font-size: 82px;
  font-weight: 900;
  font-family: "Elsie Swash Caps", serif;
  margin: 12px 0;
  `

const BannerParagraph = styled.p`
  color: ${props => props.theme.color.primary.main};
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  max-width: 560px;
`

const MailForm = styled.form`
  margin-top: 37px;
`

const MailFormContainer = styled.div`
  height: 75px;
  display: flex;
  position: relative;
`

const MailIcon = styled.img`
  width: 21.57px;
  height: 9.96px;
  gap: 0px;
  border: 2px 0px 0px 0px;
  opacity: 0.3px;
  position: absolute;
  left: 17px;
  top: calc(50% - (0.96px/2)); 

  margin: auto 0;
  z-index: 10;
`

const FormLabel = styled.label`
  position: absolute;
  top: calc(50% - 6.5px); 
  left: 45px;
  color: #bdbdbd;
  z-index: 1;
`

const MailInput = styled.input`
  height: 100%;
  width: 391px;
  border: none;

  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: left;
  padding-left: 45px;
  position: relative;

  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  font-size: 16px;
  border: none;
  color: white;
  background: rgba(255, 203, 71, 1);
  cursor: pointer;
  height: 100%;
  padding: 0 1.5rem;

  box-shadow: 10px 10px 30px 0px rgba(255, 203, 71, 0.3);
`

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
