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
  const [meals, setMeals] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedMeal, setSelectedMeal] = useState('')


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

  // Meals for dropdown
  useEffect(() => {
    if (selectedCategory) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then(resp => {
          setMeals(resp.data.meals)
        })
    }
  }, [selectedCategory])

  // Update selected meal to site

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
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select a Category</option>
          {
            categories.map(category => (
              <option key={category.idCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))
          }
        </select>

        {selectedCategory && (
          <>
            <p>Meal:</p>
            <select onChange={(e) => setSelectedMeal(e.target.value)}>
              <option value="">Select a Meal</option>
              {
                meals.map(meal => (
                  <option key={meal.idMeal} value={meal.idMeal}>
                    {meal.strMeal}
                  </option>
                ))
              }
            </select>
          </>
        )}
      </div>
    </div>
  )
}

export default OpenData