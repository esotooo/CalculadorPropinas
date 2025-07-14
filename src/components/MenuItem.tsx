import type { menuItem } from "../types"

type menuItemProps = {
    item: menuItem
    addItem: (item: menuItem) => void
}

export default function menuItem({item, addItem} : menuItemProps) {
  return (
    <button
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-xl cursor-pointer"
        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">Q.{item.price}</p>
    </button>
  )
}
