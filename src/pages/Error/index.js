import {Link} from 'react-router-dom';
import error from './error.webp';
import './App.css';
function Error () {
    return (
        <body id='centro'>
            <div>
                <h1>Ops... endereço não encontrado.</h1>
            </div>
            <img src={error} width='600'size='600'></img><br/>        
                    <Link to= '/'>Home </Link>
        </body>
    )

}
export default Error;