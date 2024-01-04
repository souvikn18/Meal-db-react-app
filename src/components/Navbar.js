import axios from "axios";
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";


const Navbar = () => {
    const [search, setSearch] = useState('');
    const [foodname, setFoodname] = useState('')
    const [foodcategory, setFoodcategory] = useState('')
    const [foodcountry, setFoodcountry] = useState('')
    const [foodimage, setFoodimage] = useState(null)
    const [cookinginstruction, setCookinginstruction] = useState('')
    const [ingridient1, setIngridient1] = useState('')
    const [ingridient2, setIngridient2] = useState('')
    const [ingridient3, setIngridient3] = useState('')
    const [ingridient4, setIngridient4] = useState('')
    const [ingridient5, setIngridient5] = useState('')
    const [ingridient6, setIngridient6] = useState('')
    const [ingridient7, setIngridient7] = useState('')
    const [ingridient8, setIngridient8] = useState('')
    const [ingridient9, setIngridient9] = useState('')
    const [ingridient10, setIngridient10] = useState('')
    const [ingridient11, setIngridient11] = useState('')
    const [ingridient12, setIngridient12] = useState('')
    const [ingridient13, setIngridient13] = useState('')
    const [ingridient14, setIngridient14] = useState('')
    const [ingridient15, setIngridient15] = useState('')
    const [ingridient16, setIngridient16] = useState('')
    const [ingridient17, setIngridient17] = useState('')
    const [ingridient18, setIngridient18] = useState('')
    const [ingridient19, setIngridient19] = useState('')
    const [ingridient20, setIngridient20] = useState('')
    const [link, setLink] = useState('')

    
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
            console.log("Result: ", data.meals[0])
            const result = data.meals[0];
            setFoodname(result.strMeal)
            setFoodcategory(result.strCategory)
            setFoodcountry(result.strArea)
            setFoodimage(result.strMealThumb)
            setCookinginstruction(result.strInstructions)
            setIngridient1(result.strMeasure1+' '+result.strIngredient1);setIngridient2(result.strMeasure2+' '+result.strIngredient2);setIngridient3(result.strMeasure3+' '+result.strIngredient3);setIngridient4(result.strMeasure4+' '+result.strIngredient4);setIngridient5(result.strMeasure5+' '+result.strIngredient5);setIngridient6(result.strMeasure6+' '+result.strIngredient6);setIngridient7(result.strMeasure7+' '+result.strIngredient7);setIngridient8(result.strMeasure8+' '+result.strIngredient8);setIngridient9(result.strMeasure9+' '+result.strIngredient9);setIngridient10(result.strMeasure10+' '+result.strIngredient10);setIngridient11(result.strMeasure11+' '+result.strIngredient11);setIngridient12(result.strMeasure12+' '+result.strIngredient12);setIngridient13(result.strMeasure13+' '+result.strIngredient13);setIngridient14(result.strMeasure14+' '+result.strIngredient14);setIngridient15(result.strMeasure15+' '+result.strIngredient15);setIngridient16(result.strMeasure16+' '+result.strIngredient16);setIngridient17(result.strMeasure17+' '+result.strIngredient17);setIngridient18(result.strMeasure18+' '+result.strIngredient18);setIngridient19(result.strMeasure19+' '+result.strIngredient19);setIngridient20(result.strMeasure20+' '+result.strIngredient20);
            setLink(result.strYoutube)
        } catch (error) {
            toast("Unable to fetch data", {type:"error"})
        }
    }

    if (foodimage) {
        return(
            <>
            <Navbar/>
            <div className="xl:flex xl:justify-center xl:gap-[10px]">
                <div className="flex flex-col my-4 xl:gap-2">
                    <img className="w-[300px] h-[300px] xl:w-[500px] xl:h-[400px]  mx-8 my-4" src={foodimage}/>
                    <h2 className="mx-8 xl:text-5xl text-4xl w-[500px] h-[40px] ">{foodname}</h2>
                    <h3 className="mx-8 xl:text-3xl text-2xl w-[300px] h-[30px] ">{foodcategory}</h3>
                    <h3 className="mx-8 xl:text-3xl text-2xl w-[300px] h-[30px] ">{foodcountry}</h3>
                </div>
                <div className="xl:my-6 xl:flex xl:flex-col xl:gap-[20px]">
                    <div>
                        <h2 className="mx-8 xl:text-5xl text-4xl w-[300px] h-[40px] ">How to Cook</h2>
                        <p className="mx-8 my-4 text-xl w-[400px] xl:w-[900px]">{cookinginstruction}</p>
                    </div>
                    <div>
                        <h2 className="mx-8 text-4xl xl:text-5xl w-[300px] h-[40px] ">Ingridients</h2>
                        <ul className="mx-8 my-4 xl:mt-6 text-xl xl:grid xl:grid-cols-2">
                            <li>{ingridient1}</li>
                            <li>{ingridient2}</li>
                            <li>{ingridient3}</li>
                            <li>{ingridient4}</li>
                            <li>{ingridient5}</li>
                            <li>{ingridient6}</li>
                            <li>{ingridient7}</li>
                            <li>{ingridient8}</li>
                            <li>{ingridient9}</li>
                            <li>{ingridient10}</li>
                            <li>{ingridient11}</li>
                            <li>{ingridient12}</li>
                            <li>{ingridient13}</li>
                            <li>{ingridient14}</li>
                            <li>{ingridient15}</li>
                            <li>{ingridient16}</li>
                            <li>{ingridient17}</li>
                            <li>{ingridient18}</li>
                            <li>{ingridient19}</li>
                            <li>{ingridient20}</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="mx-8 text-2xl w-[400px] h-[40px] ">Recipe video link: <a className="text-blue-600" href={link} >{foodname}</a></h3>
                    </div>
                </div>
            </div>
            </>
        )
    }

    return (
        <>
            <nav className="flex flex-col xl:flex-row xl:gap-[40%] justify-center gap-[10px] my-4">
                <div className="h-[40px] w-[400px] text-3xl font-bold px-8">
                    <h1 className="tracking-widest">The Meal Book</h1>
                </div>
                <form className="px-8 h-[50px] w-[400px] flex" onSubmit={handleSubmit}>
                    <input className="border border-slate-400 outline-0 outline-slate-400 rounded-2xl pl-2 pr-[70px] h-[30px] w-[300px] " value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search here"/>
                    <button className="h-[30px] w-[70px] rounded-2xl relative right-[60px] bg-sky-600 text-sky-50" onClick={fetchDetails}>Search</button>
                </form>
            </nav>
            <Home/>
            <ToastContainer/>
        </>
    )
}

export default Navbar