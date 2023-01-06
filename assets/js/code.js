let productos = [
    {
        hamburguesa: 'SINGLE CHEESEBURGER',
        precio: 13000,
        imagen: "https://livingnomads.com/wp-content/uploads/2019/02/17/beetroot-burger-sydney.3.32.jpg",
        descripcion:'Hamburguesa de una carne de 125 g cada una 100% de res a la parrilla con una tajada de queso tipo americano, tocineta, lechuga, tomate y cebolla, en pan brioche + papas medianas (francesas o cascos) + bebida PET'    
    },
    {
        hamburguesa: 'DOUBLE CHEESEBURGER',
        precio: 15000,
        imagen: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        descripcion:'Hamburguesa de dos carnes de 125 g cada una 100% de res a la parrilla con una tajada de queso tipo mozzarella, cebolla, tomate, lechuga  y salsa BigShot, en pan ajonjolí + papas medianas (francesas o cascos) + bebida PET'
    },
    {
        hamburguesa: 'BACON DOUBLE CHEESEBURGER',
        precio: 18000,
        imagen: "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0.jpg",
        descripcion:'Hamburguesa de dos carnes de 125 g cada una 100% de res a la parrilla con dos tajadas de queso tipo americano y dos tajadas de queso tipo mozzarella, cebella caramelizada y tocineta, en pan brioche + papas medianas (francesas o cascos) + bebida PET'
    }
]

let menuProductos = document.getElementById('menuBurgerShot')

for (const menuHamburguesa of productos) {
    menuProductos.innerHTML += `
        <div class="d-flex flex-column align-items-center mx-4">
            <a href="" class="text-decoration-none text-white fs-3">${menuHamburguesa.hamburguesa}</a>
            <i type="button" class="fa-solid fa-chevron-up fs-1 text-danger"></i>
            <a type="button" class="btn btn-danger col-4 styleProductos1" href="#" data-bs-toggle="modal" data-bs-target="#producto1"
                 style="background-image: url(${menuHamburguesa.imagen});"></a>
            <i type="button" class="fa-solid fa-chevron-down fs-1 text-danger"></i>
        </div>
    `
}