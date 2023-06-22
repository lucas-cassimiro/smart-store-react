import styled, { css } from "styled-components";

export const Container = styled.div`
  
    h1 {
      padding-left: 1.5rem;
      padding-top: 1.5rem;
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 50px;
    }


  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;

     button {
        background: #3877C9;
        border-radius: 8px;
        width: 80px;
        height: 30px;
        color: white;
        border: none;
        font-weight: 500;
        font-size: 0.9375rem;
     }   


    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        

        h3:first-child{
            text-align: center;
        }
        

      h3 {
        display: none;
        color: white;
        margin-bottom: 10px;
        margin-top: 10px;
       margin-left: 15px;
      }

      label {
        display: none;
        color: white;

        input {
          margin-left: 15px;
          display: none;
        }

      }

      svg {
        display: none;
        
      }
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      ul {
        div {
          h3 {
            display: block;
          }

          label {
            display: flex;
            input {
              display: block;
            }
          }

          svg {
            display: block;
            position: fixed;
            color: white;
            height: 50px;
            width: 20px;
            margin-bottom: 550px;
            margin-left: 210px;
            cursor: pointer;
          }

          @media (max-width: 420px){
            svg {
              margin-left: 155px;
            }
          }



        }
      }

      ul {
        div {
          background-color: #313131;
          position: fixed;
          height: 100%;
          top: 0px;
          left: 0px;
          width: 255px;
          animation: showSidebar 0.4s;
          z-index: 999;

          @keyframes showSidebar {
            from {
              opacity: 0;
              width: 0;
            }
            to {
              opacity: 1;
            }
          }

          @media (max-width: 420px){
            width: 200px;
          }


        }
        
      }
    `}
`;

export const Content = styled.section`
  display: block;
  width: 200px;

  select {
    width: 200px;
    height: 30px;
    background: #ffffff;
    border: 2px solid rgba(158, 158, 158, 0.87);
    border-radius: 8px;
    cursor: pointer;
    margin-right: 24px;
    font-size: 14px;
    font-weight: 400;
    color: #313131;
    padding: 0 10px;
  }

  input {
    width: 200px;
    height: 30px;
    background: #ffffff;
    border: 2px solid rgba(158, 158, 158, 0.87);
    border-radius: 8px;
    padding: 0 10px;
    margin-top: 5px;

    ::placeholder,
    ::-webkit-input-placeholder {
      font-size: 16px;
      font-weight: 400;
      font-style: italic;
      color: #989898;
    }
  }
`;

export const Celulares = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;
