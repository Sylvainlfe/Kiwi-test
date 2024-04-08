import React from 'react';
import './style.scss';

function NewCard ({img, title, name}) {

    return (
        <section>
            <img src={img} alt={name}/>
        <ul>
            <h2>{title}</h2>
            <p>Ils sont élevés en plein air.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias harum praesentium magni maxime ut dolores rerum qui dolorum corporis deserunt animi ratione numquam quas pariatur reiciendis, amet facilis adipisci! Laudantium.
                Nam obcaecati amet dolorum sequi accusantium, ab sunt quos veritatis voluptatibus optio quam nisi placeat maiores quae exercitationem necessitatibus. Odit sequi similique quis ad culpa hic, aut vel iusto libero.
                Excepturi nulla animi quod corporis fugiat iure libero repellat nam fuga in expedita consequatur culpa voluptatum, provident at. Fugiat quae quam nemo dolorum dolor ut incidunt odio consequatur ullam in?
            </p>
        </ul>
        </section>
    )
    
}

export default NewCard