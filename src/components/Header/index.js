import React from "react";
import { Container} from "./styles";
import { Image } from "react-native";
import Logo from '../../assets/logotipologin.png';

export default function Header(){
    return(
        <Container> 
            <Image source={Logo}/>
        </Container>
    )
}