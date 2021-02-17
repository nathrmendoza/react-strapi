import Shopitem from './Shopitem'

const Shoplist = ({shopitems}) => {
    let items = shopitems;

    return (
        <div className="shop-container">
            <h1>Currently browsing All..</h1>
            <div className="list-container">
                {items.map((item) => (
                    <Shopitem data={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default Shoplist
