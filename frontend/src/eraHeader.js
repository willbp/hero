import React from 'react';

export default function Header({children}){ //exporta a função Header
    return(
        //children retorna todo conteuido, texto, html para dentro da onde iremos utilizar ela
        //props.title vai pegar o title atribuido dentro do app.js
        <header>
            <h1>{children}</h1>
        </header>
    )
}


/*
export default function Header(props){ //exporta a função Header
    return(
        //children retorna todo conteuido, texto, html para dentro da onde iremos utilizar ela
        //props.title vai pegar o title atribuido dentro do app.js
        <header>
            <h1>{props.title} - Be The Hero {props.children}</h1>
        </header>
    )
}
*/
