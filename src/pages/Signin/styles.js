import styled from "styled-components";


export const KeyboardView = styled.KeyboardAvoidingView`
    flex:1;
    align-items:center;
    justify-content:center;
    background: #530BAA;
`
export const Title = styled.Text`
    color:#DFEAF0;
    font-size:15px;
    margin: 0 0 20px 0;
`
export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    padding-bottom: 10px;
    width: 90%;
   
`
export const InputArea = styled.View`
    flex-direction:row;
    background: #fff;
    width: 100%;
    margin: 0 0 25px 0;
    border-radius: 10px;
    border: 1px solid #768589;
    align-items: center;
`

export const Input= styled.TextInput`
    width: 85%;
    padding: 15px 10px;
    color: #404648;
`
export const Submit = styled.TouchableOpacity`
    background: #38BEAC;
    border-radius: 10px;
    width: 100%;
    height: 55px;
    align-items:center;
    justify-content:center;
`

export const TextButtonSubmit = styled.Text`
    color: #FFF;
    font-weight:bold ;
    font-size: 18px
`