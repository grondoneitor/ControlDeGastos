import { categories } from "../data/categories";
import { useBudget } from "../hook/useBudget";
export default function FilterByCategory() {

const {dispatch} = useBudget()
const handleOnChange =(e:React.ChangeEvent<HTMLSelectElement>)=>{
  
    dispatch({type:'filtrar-by-category', paylod:{id: e.target.value}})
}
  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
          <form
           action=""
           className=""   
          >
            <div className="flex flex-col md:flex-row md:items-center gap-5">
                <label htmlFor="categoria">Filtrar por gastos</label>
                <select
                id="categoria"
                className="bg-slate-100 w-full p-2 flex-1 rounded"
                onChange={handleOnChange}     
                >
                    <option value="">-- Todas las categorias --</option>
                    {categories.map(cat=>(
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>
          </form>
    </div>
  )
}
