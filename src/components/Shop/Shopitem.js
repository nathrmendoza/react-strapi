import Cattags from './Cattags'

const Shopitem = ({data}) => {
    let item = data;

    return (
        <div className="single-item">
            <div className="single-inner">
                <article className="top-info">
                    
                    <h3>{item.name}</h3>
                    
                    <span className="pricing-text">${item.price}</span>

                    {item.quantity == null ? "" :
                        <span className="quantity-text">{item.quantity} <em>{item.quantity <= 1 ? "pair left" : "pairs left"}</em></span>
                    }

                </article>

                <aside className="media-container">
                    {item.media.map((imgs) => (
                        <img src={"http://localhost:1337" + imgs.url} alt={imgs.alternativeText} key={imgs.id}/>
                    ))}
                </aside>
                
                <article className="block-text">
                    <div className="tags">
                        {item.categories.map((cat) => (<Cattags catname={cat.name} key={cat.id}/>))}
                    </div>
                    <p>{item.description}</p>
                </article>
            </div>
        </div>
    )
}

export default Shopitem
