# Ripasso ReactJS

- Libreria e non framework
- Linguaggio dichiarativo
- Funziona lato client (dal server viene 'inviata' una pagina vuota dove vengono caricati successivamente i dati direttamente lato client)
- Usa il virtal DOM (cambia ogni volta che un'informazione cambia) -> cambia solo l'informazione che serve cambiare e non renderizza nuovamente tutto
- Componente = funzione -> il componente nasce per essere RIUTILIZZABILE, deve avere 2 caratteristiche:  
    - iniziare sempre con la lettera maiuscola (PascalCase)  
    - deve sempre resituire qualcosa che vada bene con react (jsx: sintassi nativa di react simile ad html)
- Il componente rende dinamico il contenuto -> attraverso le PROPS <- oggetto che si mette tra parentesi, diversi modi per accedere ai valori dell'oggetto:  
``` javascript  
    // versione preferibile se ha poche proprietà, aggiungendo '...restProps' si dice al componente che potrebbero essere passate altre props così che il componente si autogestisca
    function MyComponent({ id, name, title, ...restProps }){

    }

    props.id, props.name

    const {id, name, title} = props

    // proprietà children (componente placeholder [segnaposto]) -> usato per inserire la proprietà all'interno del componente, usato molto per creare layout <- dice al componente che qualsiasi cosa gli arrivi la deve mettere dentro al componente
    function MyComponent({children}){
        return <div>{children}</div>
    }

    // così è come vengono passati i dati alla props children
    <MyComponent>
        <h1>Titolo</h1>
        <ul><li></li></ul>

        // così è come vengono passati i dati per le props
        <MyComponent id='id' name='name' title='title' />
    </MyComponent>
```

- useRef -> crea un riferimento mutabile che non causa un nuovo render quando cambia (a differenza dello stato), esempio di utilizzo: accedere agli elementi del DOM. 
``` javascript
import {useRef} from 'react'

function MyInput(){
    // creazione collegamento
    const inputRef = useRef()
    
    // tiene come riferimento l'ultima occorrenza del componente
    inputRef.current

    return <input ref={inputRef} type='text' value='' />
}
```

- useEffect -> serve a gestire gli effetti laterali che non fanno parte del rendering ma lo condizionano

- reactRouter
``` javascript
export defaul function Layout(){
    return (
        <Navbar />
        <Footer />
    )
}
```