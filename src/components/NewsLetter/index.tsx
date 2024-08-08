import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { Formik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'

import BannerImg from '../../assets/imagem-banner.png'
import MailIconSrc from '../../assets/mail.svg'
import { Banner, BannerContent, BannerHeadding2, BannerHeadding4, BannerParagraph, Button, FormLabel, MailForm, MailFormContainer, MailIcon, MailInput } from './styles'
const schema = Yup.object().shape({
  email: Yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
})

export const NewsLetter = () => {
  const { ref: bannerRef, inView:isVisible } = useInView()

  console.log(isVisible)
  console.log(bannerRef)

  return (
    <Banner ref={bannerRef} >
      <BannerContent>
        <BannerHeadding4>Sua casa com as </BannerHeadding4>
        <BannerHeadding2>melhores plantas</BannerHeadding2>
        <BannerParagraph>
               Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </BannerParagraph>

        <Formik
          initialValues={{ email:'' }}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'E-mail Cadastrado',
              text: 'Obrigado pela sua assinatura, você receberá nossas novidades no e-mail',
              showConfirmButton: false,
              timer: 1500
            })
          }}
        >
          {({ values, handleChange, handleSubmit, errors }) =>
            <MailForm action='' onSubmit={handleSubmit}>
              <MailFormContainer style={{ borderColor: errors.email ? 'red' : '' }}>
                <MailIcon src={MailIconSrc} alt='newsleetter'  />
                {!values.email && <FormLabel htmlFor='mail-newsletter'>Insira seu e-mail</FormLabel> }
                <MailInput  type='text' id='mail-newsletter' name='email' value={values.email} onChange={handleChange} />
                <Button>Assinar newsletter</Button>
              </MailFormContainer>
              {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </MailForm>
          }
        </Formik>
      </BannerContent>
      <img src={BannerImg} alt='big plant in the main page' style={{ transform: 'translate(0, -70px)' }} />
    </Banner>
  )
}
