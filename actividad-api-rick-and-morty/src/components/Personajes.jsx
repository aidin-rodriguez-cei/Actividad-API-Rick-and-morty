import { useState, useEffect } from "react";

const  Personajes = () => {

    const [data, setData] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        page: 0
    })

    useEffect( ()=> {
        console.log("Obtengo la data");
        getData();
    }, []);

    const getData = async () => {
        try {
            //llamar a la API y esperar la respuesta
            const respuesta = await fetch("https://rickandmortyapi.com/api/character");
            // Convertir el string de JSON en un objet JS
            const objJS = await respuesta.json();
            console.log(objJS);
            // Guardo la info en mi set
            setData(objJS.results);
            setInfo(objJS.info);
        } catch (e) {
            console.log("Upsi tenemos un error:",e);
        }
    }

    return (
        <>
        {!data.length && "Cargando..." }
        {
        data.map((character) => {
            return (
                <div key={character.id}>
                        <h3>{character.name}</h3>
                        <p>{character.status}</p>
                        <p>{character.species}</p>
                        <img src={character.image} alt={character.name} />
                  
                </ div>
            )
        })}
        </>
    );
}



export default Personajes;