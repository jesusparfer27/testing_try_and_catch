import Paginacion from "../paginacion/Paginacion"
import { useState, useEffect } from "react"

const Videojuegos = () => {

    const [data, setData] = useState([])

    const totalProducts = data.length

    const [productsPerPage, setProductsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    const getData = async () => {
        try {
        const response = await fetch(`https://api.rawg.io/api/games?key=3b3d36f059d14aa99642f5fa40e8aea3`);
        const data = await response.json();
        setData(data.results);
        // console.log(data.results)

    } catch(error) {
        console.error(error);
    }
}

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>VideoGames</h1>
            <div className="container-products">
                {data.slice(firstIndex, lastIndex).map((results) => (
                    <div className="card-product" key={results.id}>
                        <figure className="container-img">
                            <img src={results.background_image} alt={results.name} />
                        </figure>
                        <div className="info-product">
                            <h3>{results.name}</h3>
                            <h3>{}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <Paginacion
                productsPerPage={productsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProducts={totalProducts} />
        </div>
    )
}

export default Videojuegos