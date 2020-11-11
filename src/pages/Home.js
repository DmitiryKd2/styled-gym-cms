import React from 'react'
import {Card3Wraper, Card2Wraper} from '../componenst/global/Card'
import Header from '../componenst/home/Header'
import headerBg from '../images/header_bg.jpg'

export default function Home() {
    return (
        <Header img={headerBg}>
            <Card2Wraper>Test</Card2Wraper>
        </Header>
    )
}
