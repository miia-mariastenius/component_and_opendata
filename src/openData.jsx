import { useEffect, useState } from "react"
import axios from 'axios'
import './openData.css'

function OpenData() {

  // Random meal
  const [meal, setMeal] = useState('')
  const [mealType, setMealType] = useState('')
  const [recipe, setRecipe] = useState('')
  const [mealImg, setMealImg] = useState(null)

  // Searched meal
  const [categories, setCategories] = useState([])


  //Random meal fetch
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(resp => {
        const mealData = resp.data.meals[0]
        setMeal(mealData.strMeal)
        setMealType(mealData.strCategory)
        setRecipe(mealData.strInstructions)
        setMealImg(mealData.strMealThumb)
      })
  }, [])

  // Categories for dropdown
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(resp => {
      setCategories(resp.data.categories)
    })
  }, [])

  return (
    <div className="container">
      <div className="random-meal">
        <h1>Meal Generator</h1>
        <h3 className="title">{meal}</h3>
        <p className="title">({mealType})</p><br />
        <img src={mealImg} className="meal-img" />
        <p className="recipe">{recipe}</p>
      </div>
      <div className="search">
        <h2>Search for a meal</h2>
        <p>Category:</p>
        <select onChange={(e) => setCategories(e.target.value)}>
          <option value="">Select a Category</option>
          {
            categories.map(c => (
              <option key={c.idCategory} value={c.strCategory}>
                {c.strCategory}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default OpenData