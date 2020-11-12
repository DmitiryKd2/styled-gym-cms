import React from 'react'
import {Card2Wraper} from '../componenst/global/Card'
import Input from '../componenst/global/Input'
import Header from '../componenst/home/Header'
import headerBg from '../images/header_bg.jpg'
import { FaEye, FaLock} from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import Container from '../componenst/global/Container'


export default function Home() {
    return (
        <Header img={headerBg}>
            <Card2Wraper>                
                <h1>Логин форм</h1>
                <Container>
                    <Input leadingIcon={<BsFillPersonFill/>} type={"text"} placeholder={"Логин"}></Input>
                    <Input leadingIcon={<FaLock/>} trailingIcon={<FaEye/>} type={"password"} placeholder={"Пароль"}></Input>
                    <button>Вход</button>
                </Container>
            </Card2Wraper>
        </Header>
    )
}
