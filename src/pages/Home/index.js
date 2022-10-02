import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1> página Home </h1>
            <Link to='/'>Home</Link><br/>
            <Link to='/Cadastro'>Cadastro de Cliente</Link><br/>
            <Link to='/ContaCorrente'> Conta Corrente</Link><br/>
            <Link to='/NossaPage'>Nossa Page</Link>
        </div>
    )
}
export default Home;
