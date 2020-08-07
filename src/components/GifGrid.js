import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    console.log(images);
    console.log(loading);

    
    return (
        <>
        <h3 className = "card animate__animated animate__fadeIn">{category}</h3>
        <div className="card-grid">
            { loading && 'Cargando'}
            {
                  images.map((img) =>{
                      return <GifGridItem 
                                key = {img.id}
                                img = {img}/>
                  })
                }
        </div>
        </>
    )
}
