import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #EAEEF6;
`
export const ContainerSignin = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`
export const Modal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ModalBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`
export const ModalTtl = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
`
export const ModalFormLogin = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input:first-child {
    margin-bottom: 7px;
    }
    input {
        width: 100%;
        min-width: 100%;
        border-radius: 8px;
        border: 0.7px solid rgba(148, 166, 190, 0.4);
        outline: none;
        padding: 10px 8px;
        ::-moz-placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: #94A6BE;
        }
        ::placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: #94A6BE;
        }
    }
`
export const ModalBtnEnter = styled.button`
    width: 100%;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;
    a {
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    :hover {
    background-color: #33399b;
    }
`




// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
  
//   *:before,
//   *:after {
//     box-sizing: border-box;
//   }
  
//   a,
//   a:visited {
//     text-decoration: none;
//     cursor: pointer;
//   }
  
//   button,
//   ._btn {
//     cursor: pointer;
//   }
  
//   ul li {
//     list-style: none;
//   }
  
//   html,
//   body {
//     width: 100%;
//     height: 100%;
//     font-family: "Roboto", sans-serif;
//   }
  
//   div,
//   button,
//   a {
//     font-family: "Roboto", sans-serif;
//   }
  
//   .wrapper {
    
//   }
  
//   .container-signin {

//   }
  
//   ._hover01:hover {
//     background-color: #33399b;
//   }
  
//   .modal {

//   }
//   .modal__block {

//   }
//   .modal__ttl h2 {

//   }

//   .modal__btn-enter {

//   }
//   .modal__btn-enter 
//   .modal__form-group {
//     text-align: center;
//   }
//   .modal__form-group p,
//   .modal__form-group a {
//     color: rgba(148, 166, 190, 0.4);
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 150%;
//     letter-spacing: -0.14px;
//   }
//   .modal__form-group a {
//     text-decoration: underline;
//   }
  
//   @media screen and (max-width: 375px) {
//     .modal {
//       background-color: #FFFFFF;
//     }
//     .modal__block {
//       max-width: 368px;
//       width: 100%;
//       padding: 0 16px;
//       border-radius: none;
//       border: none;
//       box-shadow: none;
//     }
//     .modal__btn-enter {
//       height: 40px;
//     }
//   }