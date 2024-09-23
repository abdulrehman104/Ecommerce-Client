import { ChevronRight, Eraser, Home } from "lucide-react";
import Link from "next/link";

import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { CartContent } from "./components/cart-content";
import { auth } from "@clerk/nextjs/server";

const Cart = () => {
  const { userId } = auth();
  return (
    <Container className="my-4 h-auto min-h-[80vh] bg-white py-12 ">
      <div className="space-y-12 px-4 md:px-12">
        {/* Container Nav */}
        <Box className="items-center text-sm text-neutral-700">
          <Link href={"/"} className="flex items-center gap-2">
            <Home className="size-4" />
            Main Page
          </Link>
          <ChevronRight className="size-5" />
          <Link href={"/menu"}>Products</Link>
        </Box>

        {/* Cart Content Coomponent */}
        <CartContent userId={userId} />
      </div>
    </Container>
  );
};

export default Cart;
