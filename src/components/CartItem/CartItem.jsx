import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useDispatch } from "react-redux"
import { decrementItem, incrementItem, removeItem } from "../../CartSlice"

const CartItem = ({ id, thumbnail, name, price, quantity }) => {
  const dispatch = useDispatch()

  return (
    <Card className="mb-4">
      <CardContent className="flex items-center gap-6 p-4">
        <img 
          src={thumbnail} 
          alt={name} 
          className="h-24 w-24 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
            <p>Unit Price: ${price}</p>
            <p>Total: ${(price * quantity).toFixed(2)}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => dispatch(decrementItem(id))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => dispatch(incrementItem(id))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => dispatch(removeItem(id))}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CartItem
