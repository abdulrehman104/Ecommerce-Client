"use client";

import { Eraser } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { CartItems } from "./cart-items";
import { Box } from "@/components/Box";
import { Separator } from "@/components/ui/separator";
import axios from "axios";

interface CartContentProps {
  userId: string | null;
}

export const CartContent = ({ userId }: CartContentProps) => {
  const cart = useCart();
  const searchParams = useSearchParams();

  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.price * item.qty);
  }, 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Complete");
      cart.removeAll();
    }

    if (searchParams.get("canceld")) {
      toast.error("Something went wrong try again leter");
    }
  }, [searchParams, cart.removeAll, cart]);

  const onCheckOut = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: cart.items.map((item) => item.id),
        },
      );

      if (response.data && response.data.url) {
        window.location = response.data.url;
      } else {
        console.error("Response does not contain a valid URL:", response.data);
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* Heading and delete button */}
      <div className="flex w-full items-center justify-between gap-4">
        <h2 className="text-3xl font-semibold text-neutral-700 ">Cart Items</h2>
        <Button
          className="flex items-center gap-2 "
          variant="destructive"
          onClick={() => cart.removeAll()}
        >
          Clear
          <Eraser className="size-4" />
        </Button>
      </div>

      {/* Items and Cherkout Section */}
      <div className="w-full lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
        <div className="col-span-8">
          {cart.items.length === 0 && (
            <div className="mt-10 flex w-full items-center  justify-center md:mt-0">
              <p className="text-3xl font-semibold text-neutral-700">
                No items avaliable
              </p>
            </div>
          )}

          <div className="w-full space-y-4">
            {cart.items.map((item) => (
              <CartItems item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <Box className="mt-20 flex-col items-start justify-start gap-2 space-y-2 rounded-lg bg-slate-50 p-3 shadow-lg md:mt-0">
            <h2 className="text-lg font-semibold text-neutral-700">
              Order Summary
            </h2>

            <Separator />

            <Box className="flex-col space-y-4">
              <div className="text-muted-foreground flex w-full items-center justify-between whitespace-nowrap px-4">
                <p className="text-base font-bold text-black">Total</p>
                <p className="text-2xl font-semibold text-black">
                  $ {totalPrice}
                </p>
              </div>
            </Box>
          </Box>

          <Box className="flex-col items-start justify-start gap-2 space-y-2 rounded-lg bg-slate-50 p-3 shadow-lg">
            <h2 className="text-lg font-semibold text-neutral-700">Payment</h2>

            <Separator />

            <Button className="w-full" onClick={onCheckOut}>
              Check Out
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};
