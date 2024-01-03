import axios from "axios";
import { useState } from "react"
import { toast } from "react-toastify";

const Navbar = () => {

    const[search, setSearch] = useState('')
    const [foodimage, setFoodimage] = useState(null)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) {
            alert("Enter a recipe to search")
        }
        setSearch('')
    }

    const fetchDetails = async () => {
        try {
            const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            console.log("Result: ", data.meals[0]?.strMealThumb)
            setFoodimage(data.meals[0]?.strMealThumb)
        } catch (error) {
            toast("Unable to fetch data", {type:"error"})
        }
    }

    return (
        <>
            <nav className="flex flex-col xl:flex-row xl:gap-[40%] justify-center gap-[10px] my-4">
                <div className="h-[40px] w-[400px] text-3xl font-bold px-8">
                    <h1 className="tracking-widest">The Meal Book</h1>
                </div>
                <form className="px-8 h-[40px] w-[400px] flex" onSubmit={handleSubmit}>
                    <input className="border border-slate-400 outline-0 outline-slate-400 rounded-2xl pl-2 pr-[70px] h-[30px] w-[300px] " value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search here"/>
                    <button className="h-[30px] w-[70px] rounded-2xl relative right-[60px] bg-sky-600 text-sky-50" onClick={fetchDetails}>Search</button>
                </form>
            </nav>
        </>
    )
}

export default Navbar