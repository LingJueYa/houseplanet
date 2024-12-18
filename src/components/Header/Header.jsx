import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"

const Header = ({ navigate }) => {
  const cartItems = useSelector((state) => state.cart.items)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("LandingPage")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("ProductListing")}
            >
              Products
            </Button>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("ShoppingCartPage")}
            className="relative"
          >
            <ShoppingCart className="h-4 w-4" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
