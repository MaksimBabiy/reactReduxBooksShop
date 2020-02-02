import React from 'react';
import { Menu,List, Button, Image, Popup, } from 'semantic-ui-react'

const CartComponent = ({title,id,removeFromCart, image,countItems}) => {
  
  return(
 <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this,id)} color="red">Удалить</Button>
      </List.Content>
      <Image avatar src={image} />
  <List.Content>{title} {JSON.parse(countItems)[title] > 1 && `(${JSON.parse(countItems)[title]})`}</List.Content>
    </List.Item>
  </List>
 )
}
const MainMenu = ({totalPrice, count,items,countItems}) => (
    <Menu>
    <Menu.Item
      name='editorials'
    >
      Магазин книг
    </Menu.Item>
    <Menu.Menu position ="right">
    <Menu.Item
      name='reviews'
    >
      Итого:&nbsp;<b>{totalPrice}</b>руб
    </Menu.Item> 
    <Popup trigger={
      <Menu.Item
      name='help'
    >
     Корзина ({count})
    </Menu.Item>
    }
    content={items.map((book, index)=> <CartComponent key ={index} {...book} countItems= {countItems}/>)}
    on="click"
    hideOnScroll
   />
    
    </Menu.Menu>
  </Menu>
);

export default MainMenu;