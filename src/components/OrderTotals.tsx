import { formatCurrency } from "../helpers"
import type { orderItem } from "../types"
import { useMemo } from "react"

type OrderTotalsProps = {
    order: orderItem[]
    tip: number
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), 
    [order])
    const tipAmount = useMemo(() => tip * subTotal, [tip, order])
    const total = useMemo(() => subTotal + tipAmount, [tip, order])


  return (
    <>   
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina</h2>
            <p>Subtotal a pagar:{' '}
                <span className="font-bold">{formatCurrency(subTotal)}</span>
            </p>
            <p>Propina: {' '}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar:{' '}
                <span className="font-bold"> {formatCurrency(total)}</span>
            </p>
        </div>
        <button className="w-full bg-black p-3 uppercase cursor-pointer text-white font-bold mt-10 rounded-lg hover:bg-gray-600 disabled:opacity-10"
        disabled={total === 0}
        onClick={placeOrder}>
            Guardar Orden
        </button>
    </>

  )
}
