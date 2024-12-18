import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../../CartSlice"
import { motion } from "framer-motion"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const isInCart = cartItems.some((item) => item.id === product.id)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          <img 
            src={product.thumbnail} 
            alt={product.name}
            className="h-[280px] w-full object-cover transition-transform hover:scale-105"
          />
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-2xl">{product.name}</CardTitle>
          <p className="text-muted-foreground">${product.price}</p>
          <p className="mt-4 text-sm text-muted-foreground">{product.description}</p>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full"
            onClick={() => dispatch(addItem(product))}
            disabled={isInCart}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default ProductCard
