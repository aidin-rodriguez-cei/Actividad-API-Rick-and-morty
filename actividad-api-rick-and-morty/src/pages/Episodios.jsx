import { useState, useEffect } from "react";

const  Episodios = () => {

    const [data, setData] = useState([]);

    useEffect( ()=> {
        console.log("Obtengo la data");
        getData();
    }, []);

    const getData = async () => {
        try {
            //llamar a la API y esperar la respuesta
            const respuesta = await fetch("https://rickandmortyapi.com/api/episode");
            // Convertir el string de JSON en un objet JS
            const objJS = await respuesta.json();
            console.log(objJS);
            // Guardo la info en mi set
            setData(objJS.results);
        } catch (e) {
            console.log("Upsi tenemos un error:",e);
        }
    }

    return (
        <>
        {!data.length && "Cargando..." }
        {
        data.map((episode) => {
            return (
                <div key={episode.id}>
                        <h3>{episode.name}</h3>
                        <p>{episode.episode}</p>
                  
                </ div>
            )
        })}
        </>
    );
}



export default Episodios;