import React,{useState} from 'react'

//creanco contexto = estado glogal.
const ContextCart = React.createContext();

const ProviderCart = ({children}) => {
  const [cart, setCart] = useState([]);
  //funcion que agrega productos al carrito
  const addProductToCart = (addedProductId, name, price) =>{
    //agregando un producto al carrito
    if(cart.length === 0){
      setCart([{id: addedProductId, name: name, price: price, quantity:1}]);
    }else{
      //clonando carrito
      const newCart = [...cart];
      //comprobando si el id del producto a agregar ya existe en el arreglo de carrito
      const IsInTheCart = newCart.filter((cartProduct) => {
        return cartProduct.id === addedProductId
      }).length > 0;
      //si el id del producto a agregar ya existe en el arreglo del carrito se aumentara la cantidad del producto
      if(IsInTheCart){
        newCart.forEach((cartProduct, index) => {
          if(cartProduct.id === addedProductId){
            const quantity = newCart[index].quantity;
            const price2 = newCart[index].price;
            newCart[index] = {
              id: addedProductId, 
              name: name, 
              price: price + price2, 
              quantity: quantity + 1
            }
          }
        });
      }else{
        //si el producto no exite en el arreglo del carrito se añadira 
        newCart.push(
          {
            id: addedProductId, 
            name: name, 
            price: price, 
            quantity: 1
          }
        );
      }
      //cambiamos el estado del carrito por new cart
      setCart(newCart)
    }
    console.log(addedProductId, name, price)
  }

  return (
    <ContextCart.Provider value={{cart, addProductToCart}}>
      {children}
    </ContextCart.Provider>
  )
}

export {ContextCart, ProviderCart};