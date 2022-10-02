import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import ContaCorrente from './pages/ContaCorrente';
import NossaPage from './pages/NossaPage';
import Error from './pages/Error';
function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/contacorrente' element={<ContaCorrente />} />
                <Route path='/nossapage' element={<NossaPage/>} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp;