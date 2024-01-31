import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg '>
            <header className='py-2 px-6 bg-blue-950 text-blue-50 font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-6 text-2xl bg-blue-50 text-blue-950 h-full font-semibold'>{categoria.nome}</p>

            <div className="flex bg-blue-700 justify-center font-semibold">
                <Link to={`/editarcategoria/${categoria.id}`} className="flex justify-center text-blue-950 bg-white border-white border-solid px-4 py-2 hover:bg-blue-200 w-full">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className="rounded text-white border-white border-solid px-4 py-2 hover:bg-blue-950
         w-full flex justify-center">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria