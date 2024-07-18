import { useState, useEffect } from "react";

const  Lugares = () => {

    const [data, setData] = useState([]);

    useEffect( ()=> {
        console.log("Obtengo la data");
        getData();
    }, []);

    const getData = async () => {
        try {
            //llamar a la API y esperar la respuesta
            const respuesta = await fetch("https://rickandmortyapi.com/api/location");
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
        data.map((location) => {
            return (
                <div key={location.id}>
                        <h3>{location.name}</h3>
                        <p>{location.type}</p>
                  
                </ div>
            )
        })}
        </>
    );
}



export default Lugares;