import { useEffect, useState } from "react"
import axios from 'axios'
import './openData.css'

function OpenData() {

  const [meal, setMeal] = useState('')
  const [mealType, setMealType] = useState('')
  const [recipe, setRecipe] = useState('')
  const [mealImg, setMealImg] = useState(null)

  useEffect(()=> {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then (resp => {
      const mealData = resp.data.meals[0]
      setMeal(mealData.strMeal)
      setMealType(mealData.strCategory)
      setRecipe(mealData.strInstructions)
      setMealImg(mealData.strMealThumb)
    })
  },[])

  return(
    <div>
      <h1>Meal Generator</h1>
      <h3 className="title">{meal}</h3>
      <p className="title">({mealType})</p><br/>
      <img src={mealImg} className="meal-img"/>
      <p className="recipe">{recipe}</p>
    </div>
  )
}

export default OpenData