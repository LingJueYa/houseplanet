import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";

const ShoppingCart = ({ navigate }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => navigate("ProductListing")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Continue Shopping
      </Button>

      <div className="grid gap-8 md:grid-cols-[1fr_300px]">
        <div>
          <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
              <Separator />
              <Button className="w-full" onClick={() => alert("Coming Soon")}>
                Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShoppingCart;
