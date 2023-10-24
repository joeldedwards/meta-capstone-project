

function Card({id, title, img, price, description}) {
  return (
    <>
        <div className="card">
            <figure>
                <img src={img} alt={title} />
            </figure>
            <div className="content">
                <div className="info">
                  <div className="title">{title}</div>
                  <div className="price">{price}</div>
                </div>
                <p className="desc">
                  {description}
                </p>
                <a href="">
                  Order a delivery
                </a>
            </div>
        </div>
    </>
  )
}

export default Card