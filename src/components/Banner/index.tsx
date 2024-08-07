import styled from 'styled-components'

import ImageBanner from '../../assets/imageBannerSecondary.png'

const StyledBanner = styled.section`
  display: flex;
  
  box-shadow: 10px 10px 30px 0px #0000000F;
  background-color: white;

  width: 995px;
  height: 440px;
  img {
    object-fit: cover;
  }
  >div {
    padding-left: 32px;
    padding-top: 58px;
    display: flex;
    flex-direction: column;

    h3 {
      font-family: Elsie Swash Caps;
      font-size: 42px;
      font-weight: 900;
      line-height: 48.38px;
      text-align: left;
      margin: 12px 0;
    }

    ul {
      padding: 0;
      padding-top: 20px;
      margin: 0;
      
     li {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 35px;

      div {
        border-radius: 50%;
        background-color: #FFCB47;
        width: 52px;
        height: 52px;
      }
     }  
    }
  }
`

const StyledSpanBanner = styled.span`
  color: #8f8f8f;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 26.82px;
  text-align: left;
      
`

const Banner = () => {
  return (
    <StyledBanner>
      <img src={ImageBanner} alt='Imagem banner folhas' />
      <div>
        <StyledSpanBanner>Como consegui</StyledSpanBanner>
        <h3>minha planta</h3>
        <ul>
          <li><div></div><StyledSpanBanner>Escolha suas plantas</StyledSpanBanner></li>
          <li><div></div><StyledSpanBanner>Faça seu pedido</StyledSpanBanner></li>
          <li><div></div><StyledSpanBanner>Aguarde na sua casa</StyledSpanBanner></li>
        </ul>
      </div>
    </StyledBanner>
  )
}

export default Banner
