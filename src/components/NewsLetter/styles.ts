import { Form } from 'formik'
import styled from 'styled-components'

export const Banner = styled.section`
  display: flex;
  animation-name: example;
  animation-duration: 2s;
  

  background: {
    image: url('assets/imagem-banner.png');
    position: right bottom;
    size: 787px;
    repeat: no-repeat;
  }
  @keyframes example {
    from {transform: translateX(-400px)}
    to {transform: translateX(0px)}
  }

  padding-top: 80px;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerHeadding4 = styled.h4`
  font-size: 22px;
  font-weight: 400;
  color: ${props => props.theme.color.primary.main};
  margin: 0;
  width: 100%;
`

export const BannerHeadding2 = styled.h2`
  color: ${props => props.theme.color.primary.main};
  font-size: 82px;
  font-weight: 900;
  font-family: "Elsie Swash Caps", serif;
  margin: 12px 0;
  `

export const BannerParagraph = styled.p`
  color: ${props => props.theme.color.primary.main};
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  max-width: 560px;
`

export const MailForm = styled(Form)`
  margin-top: 37px;
`

export const MailFormContainer = styled.div`
  border: 1px solid transparent;
  display: flex;

  position: relative;
  height: 75px;
  margin-bottom: 12px;
`

export const MailIcon = styled.img`
  width: 21.57px;
  height: 9.96px;
  gap: 0px;
  border: 2px 0px 0px 0px;
  opacity: 0.3px;
  position: absolute;
  left: 17px;
  top: calc(47% - (0.96px/2)); 

  margin: auto 0;
  z-index: 10;
`

export const FormLabel = styled.label`
  position: absolute;
  top: calc(50% - 6.5px); 
  left: 45px;
  color: #bdbdbd;
  z-index: 1;
`

export const MailInput = styled.input`
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
export const Button = styled.button`
  font-size: 16px;
  border: none;
  color: white;
  background: rgba(255, 203, 71, 1);
  cursor: pointer;
  height: 100%;
  padding: 0 1.5rem;

  box-shadow: 10px 10px 30px 0px rgba(255, 203, 71, 0.3);
`