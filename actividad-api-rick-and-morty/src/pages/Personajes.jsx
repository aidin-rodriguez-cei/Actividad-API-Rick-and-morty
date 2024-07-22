import { useState, useEffect } from "react";

const  Personajes = () => {

    const [personajes, setPersonajes] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        page: 0
    })

    useEffect( ()=> {
        getPersonajes("https://rickandmortyapi.com/api/character"); //utilizando async/await
        console.log("Cargando datos");
    }, []); // al estar vacìo unicamente se ejecuta en componentDidMount

    const getPersonajes = async (url) => {
        try {
            //const url = "https://rickandmortyapi.com/api/character"
            //llamar a la API y esperar la respuesta
            const respuesta = await fetch(url);
            
            // Convertir el string de JSON en un objeto JS
            const objeto = await respuesta.json();
            console.log("Objeto vale: ", objeto);
            
            // Guardo la info en mi set
            setPersonajes(objeto.results);
            setInfo(objeto.info);

        } catch (e) {
            console.log("Upsi tenemos un error:",e);
        }
    }

    return (
        <section>
            <h3>Personajes({info.count})</h3>

            <div className="flexBetween">
                <button disabled={!info.prev} onClick={()=>{getPersonajes(info.prev)}}>Ant</button>
                <div className="flexCenter">
                </div>
                <button disabled={!info.next} onClick={()=>{getPersonajes(info.next)}}>Sig</button>
                
            </div>

            <div className="flexGrid">
                {
                personajes.map((Personaje) => (
                            < PersonajeCard key={Personaje.id} {...Personaje}/>
                        ))


                    }

            </div>
        </section>
    );
}


const PersonajeCard = ({id, name, status, species, image}) => {
    return(
        <article className="Card">
        <p>Nombre: {name}</p>
        <p>Status: {status}</p>
        <p>Especies: {species}</p>
        <img src={image} alt={name} />
        </article>
    )
}


export default Personajes;