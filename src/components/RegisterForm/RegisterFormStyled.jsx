import styled from "styled-components";

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
text-align: center;
margin: auto;
padding: 24px;`

export const RegButton = styled.button`
 width: 120px;
 height: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  border-radius: 4px;
  border-color: #716f6f;` 

export const Label = styled.label` 
  width: 100%;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;
  `

export const Input = styled.input`
font-size: 20px;
margin-bottom: 15px;
border-radius: 6px;
border-color: white;
width: 100%;
outline: none;
:focus{
  outline: none;
}
`