import {useState, useEffect} from 'react'
import axios from 'axios'
import Shoplist from '../components/Shop/Shoplist'

const Shop = () => {
    const [shopData, updateShopData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:1337/products').then(res => updateShopData(res.data)).catch(console.error)
    },[])

    return (
        <main>
            <h1>Check out the items below</h1>
            <Shoplist shopitems={shopData}/>
        </main>
    )
}

export default Shop
