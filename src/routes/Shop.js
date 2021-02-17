import {useState, useEffect} from 'react'
import axios from 'axios'
import Shoplist from '../components/Shop/Shoplist'
import Shopfilter from '../components/Shop/Shopfilter'


const Shop = () => {

    const [shopData, updateShopData] = useState([]);
    const [filterCats, updateCats] = useState([]);

    //start
    useEffect(() =>{
        //items
        axios.get('http://localhost:1337/products').then(res => updateShopData(res.data)).catch(console.error);
        //filter cats
        axios.get('http://localhost:1337/categories').then(res => updateCats(res.data)).catch(console.error)
    },[])

    //filter logic
    const filterDo = (e) =>{

        let willFilter = [];

        e === "All" ?
        axios.get('http://localhost:1337/products')
        .then(res => updateShopData(res.data))
        
        :

        axios.get('http://localhost:1337/products')
        .then(res => {
            res.data.map(item => {
                return item.categories.map(cat => {
                    if (cat.name === e) {
                         willFilter.push(item);
                    }
                    return cat
                })
            });
            updateShopData(willFilter);
        });
    }

    //render
    return (
        <main>
            <Shopfilter filters={filterCats} clickFunc={filterDo}/>
            <h1>Check out the items below...</h1>
            <Shoplist shopitems={shopData}/>
        </main>
    )
}

export default Shop
