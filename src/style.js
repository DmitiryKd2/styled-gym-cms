

export const setColor = {
    primaryColor: "#2980b9",
    mainWhite: "#fff",
    mainBlack: "#222",
    mainGray: "#e2e1e0",
    darckGray: "#7f8c8d"
}

export const setFont = {
    main: "font-family: 'Lato', sans-serif;",
    slanted: "font-family: 'Courgette', cursive;"
}

export const setFlex = ({x='center', y='center',
                         flexDirection = 'row'}) => {
    return `display: flex;
    align-items: ${y};
    justify-content: ${x};
    flex-direction: ${flexDirection}`
}
