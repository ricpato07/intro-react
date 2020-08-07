import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp =() =>  {

    //const categories = ['One punch', 'Samurai X', 'Dragón ball'];
    const [categories, setCategories] = useState(['Samurai X']);

    // const handleAdd = () =>{
    //     setCategories(['Hunter Hunter',...categories]);
    // }

    return (
        <div>
            <h2>GitExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />
            <ol>
              {
                  categories.map((category) =>{
                      return <GifGrid 
                      key = {category}
                      category={category} />
                  })
              }
            </ol>
        </div>
    )
}
