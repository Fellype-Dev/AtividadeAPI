import React, { useEffect, useState } from 'react';
import './assets/estilo.css';
import background from './assets/images/background.png';

function App(){
  const [nutri, setNutri] = useState([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((r) => r.json())
    .then((json) =>{
      setNutri(json);
    })
  }, []);

  return(
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(

          <article key={item.id}>
            <strong>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo}></img>
            <p>{item.subtitulo}</p>
            <span>{item.categoria}</span>
          </article>
        );
      })
      }
    </div>
  );
}

export default App;