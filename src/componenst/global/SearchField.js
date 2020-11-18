import React from 'react'

export default function SearchField() {
    return (
        <>
            <form className="example">
                <input type="text" placeholder="Фамилия.." name="name" />
                <input type="text" placeholder="Имя.." name="sername" />
                <input type="text" placeholder="Отчество.." name="patronimyc" />
                <button>submit</button>
            </form>
        </>
    )
}
