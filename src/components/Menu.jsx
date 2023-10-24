import Card from './Card'

function Menu() {

    const menuItems = [
        {
            "id": 1,
            "title": "Greek Salad",
            "img": "images/greek_salad.jpg",
            "price": "$12.99",
            "description": "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            "id": 2,
            "title": "Bruchetta",
            "img": "images/bruchetta.svg",
            "price": "$5.99",
            "description": "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            "id": 3,
            "title": "Lemon Dessert",
            "img": "images/lemon_dessert.jpg",
            "price": "$5.00",
            "description": "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]

  return (
    <section id="Menu">
        <div className="container">
            <div className="header">
                <h1>This Weeks Specials!</h1>
                <button type="button">Online Menu</button>
            </div>
            <div className="cards">
                {
                    menuItems.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            description={item.description}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Menu