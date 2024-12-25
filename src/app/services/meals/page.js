'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('a');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('')
    console.log(meals.length)
    console.log(meals)
    console.log(error)
    useEffect(() =>{
        try{
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        .then(res => res.json())
        .then(data => {
            if(Array.isArray(data.meals)){
            setMeals(data.meals);
            setError('')
            }
            else{
                setError(data.meals)
                setMeals([])
            }
        })
        }
        catch(errors){
            setError(errors?.meals)
        }
    },[search, setSearch]);
    return (
        <div className='mt-12 mx-16'>
            <h2 className='text-4xl text-slate-800 font-bold text-center'>This is where all the meals displayed</h2>
            <div className='mt-6'>
                <input onChange={(event) => setSearch(event.target.value)} type='text' name='mealSearch' className='p-2 border-2 border-slate-800 rounded-md w-96' placeholder='Type the first letter to watch all the meals'/>
                <br/>
            </div>
            {
                meals.length > 0 && <div className='mt-4 grid grid-cols-3 gap-3'>
                {
                    meals?.map(meal => (
                        <div key={meal?.idMeal} className='border border-rose-500 p-4'>
                            <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={300} height={300}/>
                            <h3 className='font-semibold text-rose-800 mt-3 text-xl'>{meal?.strMeal}</h3>
                            <h4 className='mt-2 text-rose-300'>Category: {meal?.category}</h4>
                        </div>
                    ))
                }
            </div>
            }{
                meals.length < 1 && <h2 className='text-red-500 text-center mt-4'>{error}</h2>
            }
        </div>
    );
};

export default Meals;