import React, { useState } from "react";
import {
    KeyboardView,
    Container,
    Title,
    Input,
    Submit,
    TextButtonSubmit,
    InputArea,
    Password,
} from "./styles";

import { TouchableOpacity, View } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

import Header from "../../components/Header";



export default function Signin() {

    const [senha, setSenha] = useState('');
    const [showSenha, setShowSenha] = useState(true)

    return (
        <KeyboardView>
            <Header />
            <Container>
                <Title>Faça login para continuar</Title>
            
                <InputArea>
                <Input
                    placeholderColor="#768589"
                    placeholder="Entre com seu e-mail" />
                    <Icon name="mail-outline" color="#768589" size={30} />
                </InputArea>
                <InputArea>
                    <Input
                        placeholderColor="#768589"
                        placeholder="Entre com sua senha"
                        value={senha}
                        onChangeText={(texto) => setSenha(texto)}
                        secureTextEntry={showSenha} />

                    <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
                        <Icon name={showSenha ? 'ios-eye' : 'ios-eye-off'}color="#768589" size={30} />
                    </TouchableOpacity>
                </InputArea>
                <Submit>

                    <TextButtonSubmit>Entrar</TextButtonSubmit>
                </Submit>
            </Container>
        </KeyboardView>
    )
}