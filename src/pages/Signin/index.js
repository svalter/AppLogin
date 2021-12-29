import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

import {
    KeyboardView,
    Container,
    Title,
    Input,
    Submit,
    TextButtonSubmit,
    InputArea,
} from "./styles";
import Header from "../../components/Header";


export default function Signin() {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true)

    return (
        <KeyboardView>
            <Header />
            <Container>
                <Title>Faça login para continuar</Title>
                <InputArea>
                <Input
                    placeholderColor="#530BAA"
                    placeholder="Entre com seu e-mail" />
                    <Icon name="mail-outline" color="#AEBCC3" size={30} />
                </InputArea>
                <InputArea>
                    <Input
                        placeholderColor="#530BAA"
                        placeholder="Entre com sua senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={showPassword} />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Icon name={showPassword ? 'ios-eye' : 'ios-eye-off'}color="#AEBCC3" size={30} />
                    </TouchableOpacity>
                </InputArea>
                <Submit>
                    <TextButtonSubmit>Entrar</TextButtonSubmit>
                </Submit>
            </Container>
        </KeyboardView>
    )
}