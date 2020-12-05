import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"
// import  'bootstrap';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
const StoreProfile = (props) => {
    const { id } = props.match.params
    const [userStore, setStore] = useState(["store"])
    const [storeId, setStoreId] = useState(id)
    const [storeOrders, setStoreOrder] = useState([])
    const [storeProducts, setStoreProducts] = useState([])
    const getStorebyid = async (infoArgumnt) => {
        axios
            .get(`http://localhost:5000/mystore/${infoArgumnt}`)
            .then(async (response) => {
                setStore(response.data[0])
            })
            .catch((err) => {
                throw err
            });
    };
    const storesOrdersbyid = async (infoArgumnt) => {
        axios
            .get(`http://localhost:5000/storesOrders/${infoArgumnt}`)
            .then(async (response) => {
                setStoreOrder(response.data)
            })
            .catch((err) => {
                throw err
            });
    };
    const storesProductbyid = async (infoArgumnt) => {
        axios
            .get(`http://localhost:5000/storeproducts/${infoArgumnt}`)
            .then(async (response) => {
                console.log(response.data);
                setStoreProducts(response.data)
            })
            .catch((err) => {
                throw err
            });
    };

    const deleteProduct= async (infoArgumnt) => {
        axios
            .delete(`http://localhost:5000/product/${infoArgumnt}`)
            .then(async (response) => {
                storesProductbyid(storeId)
                        })
            .catch((err) => {
                throw err
            });
    };

    const storeOrdersList = storeOrders.map((e, index) =>
        <li className="list-group-item list-group-item-action" num={index + 1} key={index}>
            <div>
                <div className="bg-info" >order number   :  {index + 1} </div>
                <div className="bg-info" >order id   :  {e.orders_id} </div>
                <div>delivary name  : {e.first_name} {e.last_name}</div>
                <div>product name  :  {e.product_name} </div>
                <div>store name  :  {e.store_name} </div>
                <div>item id  :  {e.item_id} </div>
            </div>
        </li>
    )
    const storeProductsList = storeProducts.map((e, index) =>
        <li className="list-group-item list-group-item-action" num={index + 1} key={index}>
            <div> 
                <div className="bg-info" >product number   :  {index + 1}
                <button onClick={()=>deleteProduct(e.product_id)} >d</button> </div>
                <div className="bg-info" >product_id   :  {e.product_id} </div>
                <div>product name  : {e.category_id}</div>
                <div>product descripition  :  {e.product_descripition} </div>
                <div>price :  {e.unit_price} </div>
                <div>available product :  {e.available_product} </div>
                <div>quantity per unit product :  {e.quantity_per_unit} </div>
                <img src={e.picture} alt="product pic" className="pPic rounded mx-auto d-block" ></img>
            </div>
        </li >
    )
    useEffect(() => {
        getStorebyid(storeId); storesOrdersbyid(storeId); 
        storesProductbyid(storeId);
    }, [])
    return (
        <Router>
            <div>
                <div className="list-group-item list-group-item-action">
                    <h1 className="bg-info" >store id :{userStore.store_id}</h1>
                    <div>store name :   {userStore.store_name} </div>
                    <div>store category :   {userStore.store_category} </div>
                    <div><img src={userStore.store_pic} alt="store pic" className="pPic"></img> </div>
                </div>
                <div>
                    <ul>
                        {storeOrdersList}
                    </ul>
                </div>
                <div>
                    <ul>
                        {storeProductsList}
                    </ul>
                </div>

            </div>
        </Router>
    )
}


export default StoreProfile
