import React from 'react'
import ImgMediaCard from '../Item/Item'
const ItemList = () => {
    return (
    <div>
        <h1>Lista de Productos</h1>
        <div>
            <ImgMediaCard
            nombre={"Samsung Galaxy Z Flip"}
            precio={"150.000"}
            imagen={"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/08/impresiones-samsung-galaxy-z-flip-4-2781993.jpg?itok=J33-YxfK"}
            />
            <ImgMediaCard
            nombre={"Samsung Galaxy S22"}
            precio={"230.000"}
            imagen={"https://i.blogs.es/4fdad2/captura-de-pantalla-2022-02-09-a-las-15.27.23/450_1000.jpeg"}
            />
        </div>
    </div>
    )
}

export default ItemList