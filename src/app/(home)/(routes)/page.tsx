import Link from "next/link";
import Image from "next/image";

import { PopularContent } from "@/components/Popular-content ";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import getProduct from "@/actions/get-product";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { FileHeart, SaladIcon, ShoppingCartIcon } from "lucide-react";

export const revalidate = 60;

export default async function Home() {
  const products = await getProduct({ isFeatured: true });

  return (
    <Container className="px-4 md:px-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 py-12 pt-16 md:grid-cols-2">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="rounded-full border border-gray-400 px-6 py-1 text-neutral-500">
            Hungry?
          </p>
          <h2 className="my-4 text-5xl font-bold uppercase tracking-wide text-neutral-700">
            Just come to <span className="block py-4">foodied & Order</span>
          </h2>
          <p className="my-4 text-left text-base text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            incidunt corrupti perspiciatis odit! Quibusdam ea tenetur.
          </p>
          <div className="my-4 flex items-center justify-center gap-x-6 ">
            <Link href="/menu">
              <Button className="bg-hero rounded-full px-8 py-4 md:px-16 md:py-6">
                Order Now
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                variant="outline"
                className="rounded-full px-8 py-4 hover:bg-gray-200 md:px-16 md:py-6"
              >
                Explore More
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex h-[560px] w-full items-center justify-center">
          <Image
            src="/Food.png"
            alt="Food Image"
            width={500}
            height={500}
            className="absolute size-full object-contain"
          />
        </div>
      </section>

      {/* Featured Section */}
      <section className="my-4 grid grid-cols-1 gap-x-6 gap-y-20 py-12 md:grid-cols-4 md:gap-12">
        {products.slice(0, 4).map((item) => (
          <PopularContent key={item.id} data={item} />
        ))}
      </section>

      {/* Testominals Section */}
      <section className="my-4 flex flex-col items-center justify-center py-12">
        <h2 className="my-4 text-center text-5xl font-bold uppercase tracking-wide text-neutral-700 ">
          Why Choose Us?
        </h2>
        <p className="my-2 w-full text-center text-base text-neutral-500 md:w-[560px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt
          corrupti perspiciatis odit! Quibusdam ea tenetur.
        </p>

        <div className="my-6 mt-20 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="flex flex-col items-center justify-center gap-4 border-none p-6 shadow-lg ">
            <SaladIcon className="text-hero mx-auto mb-4 size-12" />
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-neutral-600">
              Serve Healthy Food
            </CardTitle>
            <CardDescription className="text-muted-foreground text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ducimus
              laudantium sunt
            </CardDescription>
          </Card>

          <Card className="flex flex-col items-center justify-center gap-4 border-none p-6 shadow-lg ">
            <FileHeart className="text-hero mx-auto mb-4 size-12" />
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-neutral-600">
              Best Quality
            </CardTitle>
            <CardDescription className="text-muted-foreground text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ducimus
              laudantium sunt
            </CardDescription>
          </Card>

          <Card className="flex flex-col items-center justify-center gap-4 border-none p-6 shadow-lg ">
            <ShoppingCartIcon className="text-hero mx-auto mb-4 size-12" />
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-neutral-600">
              Fast Delivery
            </CardTitle>
            <CardDescription className="text-muted-foreground text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ducimus
              laudantium sunt
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* OUR SPECIAL CHEFS  */}
      <section className="my-4 flex flex-col items-center justify-center py-12">
        <h2 className="my-4 text-center text-5xl font-bold uppercase tracking-wide text-neutral-700 ">
          OUR SPECIAL CHEFS
        </h2>
        <p className="my-2 w-full text-center text-base text-neutral-500 md:w-[560px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt
          corrupti perspiciatis odit! Quibusdam ea tenetur.
        </p>

        <div className="my-6 mt-20 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="bg-hero/20 relative flex h-96 flex-col items-center justify-end border-none shadow-lg md:h-[520px] ">
            <Image
              src="/chefs/chef1.png"
              alt="Chief One Image"
              fill
              className="size-full object-contain"
            />
          </Card>

          <Card className="bg-hero/20 relative mt-20 flex h-96 flex-col items-center justify-end border-none shadow-lg md:h-[520px]">
            <Image
              src="/chefs/chef2.png"
              alt="Chief One Image"
              fill
              className="size-full object-contain"
            />
          </Card>

          <Card className="bg-hero/20 relative flex h-96 flex-col items-center justify-end border-none shadow-lg md:h-[520px] ">
            <Image
              src="/chefs/chef3.png"
              alt="Chief One Image"
              fill
              className="size-full object-contain"
            />
          </Card>
        </div>
      </section>
    </Container>
  );
}
