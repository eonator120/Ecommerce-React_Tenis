const productList =
[
    {
        "id": '1',
        "imagen":"../images/zapatillas-3mc-vulc.jpg",
        "nombre": "3MC Vulc",
        "marca": "Zapatillas Adidas",
        "precio": 10999,
        "stock": 15,
        "categoria": "hombres",
        "cantidad": 0
    },
    {
        "id": '2',
        "imagen":"../images/zapatillas-3mc-vulc-black.jpg",
        "nombre": "3MC Vulc Black",
        "marca": "Zapatillas Adidas",
        "precio": 10999,
        "stock": 15,
        "categoria": "mujer",
        "cantidad": 0
    },
    {
        "id": '3',
        "imagen":"../images/zapatillas-advantage-base.jpg",
        "nombre": "Advantage Base",
        "marca": "Zapatillas Adidas",
        "precio": 10999,
        "stock": 15,
        "categoria": "niños",
        "cantidad": 0
    },
    {
        "id": '4',
        "imagen":"../images/zapatillas-campus-adv-unisex.jpg",
        "nombre": "Campus ADV (UNISEX)",
        "marca": "Zapatillas Adidas",
        "precio": 14999,
        "stock": 15,
        "categoria": "mujer",
        "cantidad": 0
    },
    {
        "id": '5',
        "imagen":"../images/zapatillas-duramo-sl.jpg",
        "nombre": "Duramo SL",
        "marca": "Zapatillas Adidas",
        "precio": 11499,
        "stock": 15,
        "categoria": "niños",
        "cantidad": 0
    },
    {
        "id": '6',
        "imagen":"../images/zapatillas-eq19-run.jpg",
        "nombre": "EQ 19 Run",
        "marca": "Zapatillas Adidas",
        "precio": 12499,
        "stock": 15,
        "categoria": "niños",
        "cantidad": 0
    },
    {
        "id": '7',
        "imagen":"../images/zapatillas-lite-racer-rebold.jpg",
        "nombre": "Lite Racer Rebold",
        "marca": "Zapatillas Adidas",
        "precio": 12499,
        "stock": 15,
        "cantidad": 0
    },
    {
        "id": '8',
        "imagen":"../images/zapatillas-ny-90.jpg",
        "nombre": "NY 90",
        "marca": "Zapatillas Adidas",
        "precio": 13999,
        "stock": 15,
        "categoria": "otros",
        "cantidad": 0
    },
    {
        "id": '9',
        "imagen":"../images/zapatillas-vs-pace-black.jpg",
        "nombre": "Superstar Black",
        "marca": "Zapatillas Adidas",
        "precio": 8.999,
        "stock": 15,
        "categoria": "otros",
        "cantidad": 0
    },
    {
        "id": '10',
        "imagen":"../images/zapatillas-runfalcon-2.0.jpg",
        "nombre": "Run Falcon 2.0",
        "marca": "Zapatillas Adidas",
        "precio": 10.499,
        "stock": 15,
        "categoria": "hombres",
        "cantidad": 0
    }
   
]
export const getProducts = new Promise((resolve, reject) => {
    let condition = true;
    if(condition){
        setTimeout(()=>{
            resolve(productList);
        }, 2000);
    }else{
        reject('404 not found')
    }
    
});
const getById = (id, array) => array.find((el) => el.id === id);

export const getProductById = async (id, setState) => {
    try {
      const result = await getProducts;
      setState(getById(id, result));
    } catch (error) {
      console.log(error);
    }
  };
