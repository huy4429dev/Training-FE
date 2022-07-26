import React from 'react'
import Item from './Item'

export default function ListItem({items,handleRemoveItem}) {
  return (
    <ul>
        {items.map((item) => (
          <Item 
            item={item} 
            handleRemoveItemFromItem={handleRemoveItem}
            />
        ))}
      </ul>
  )
}
