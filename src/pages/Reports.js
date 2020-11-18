import React, { useState } from 'react'

const axios = require('axios');

export default function Reports() {
    const [clients, setClient] = useState([]);

    const handleOnClick = async () => {
        console.log('get report')
        try {
            const res = await axios.get('https://217.74.113.56:3000/api/clients/myClients/{"employeeId": 1125}')

            setClient(res.data)
            console.log(clients)

        } catch (error) {
            console.log('error', error)
        }
    }

    function toBase64(arr) {
        //arr = new Uint8Array(arr) if it's an ArrayBuffer
        return btoa(
           arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
     }

    const buildList = clients.map((client) => {
        // console.log(client)
        return <div key={client.cm_id}>
            <img alt="clientphoto" height="120px" width="90px" src={"data:image/png;base64,"+ toBase64( client.photo.data)}></img>
            <h3>{client.lastname + ' ' + client.firstname + ' ' + client.patronymic}</h3>
        </div>
    }

    );

    return (
        <div>
            <button onClick={handleOnClick}>load my client</button>
            <ul>
                {buildList}
            </ul>
        </div>
    )
}
