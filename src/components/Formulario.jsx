//lo que el usuario pondra en el input , deberemos almacenarlo en el state
import React,{useState} from 'react';

const Formulario = () => {
    
    const [termino,guardarTermino] = useState('');

    return ( 
        <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Busca una imagen,ejemplo: futbol"
                    onChange={e => guardarTermino(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                <input 
                type="submit"
                className="btn btn-lg btn-danger btn-block"
                value="Buscar"
                />
            </div>
            </div>
        </form>
     );
}
 
export default Formulario;