import { useState } from "react"
import type {menuItem, orderItem } from "../types"


export default function useOrder(){

    const [order, setOrder] = useState<orderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: menuItem) => {
        const itemExist = order.find(orderItem => (orderItem.id === item.id))
        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} : orderItem
            )
            setOrder(updatedOrder)
        }else{
            const newItem : orderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: menuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }
     
        
    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}