import { useEffect, useState } from "react"
import axios from 'axios'

function OpenData() {

  const [meal, setMeal] = useState('')

  useEffect(()=> {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then (resp => {
      const MealName = resp.data.meals[0].strMeal
      setMeal(MealName)
    })
  },[])

  return(
    <div>
      <h3>{meal}</h3>
    </div>
  )
}

export default OpenData