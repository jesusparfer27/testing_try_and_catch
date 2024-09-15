import {useState, useEffect} from 'react'
import Paginacion from '../paginacion/Paginacion'
import './pokeapi.css'

const PokeaApi = () => {

// const [pagina, setPagina] = useState(1)
const [data, setData] = useState([])

const totalProducts = data.length

    const [productsPerPage, setProductsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    const getData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 801)}`);
            const data = await response.json();
            setData(data);
            console.log(data)

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <>

        <div className='Pokemon'>
            <img className="LogoPokemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
            <h2>{data.name}</h2>
            {data.sprites && (
                <div>

                    <img className='Pokemon-img' src={data.sprites.front_default} alt="delante" />
                    <img className='Pokemon-img' src={data.sprites.back_default} alt="atrás" />

                    </div>
            )}
        </div>

    
                <Paginacion 
            productsPerPage={productsPerPage} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            totalProducts={totalProducts}/>
        </>
    )
}

export default PokeaApi 