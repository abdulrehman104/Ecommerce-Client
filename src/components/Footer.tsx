import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <Container>
        <div className="bg-hero/20 grid w-full grid-cols-2 gap-6 p-4 py-8 md:grid-cols-4 md:px-12">
          <div className="flex flex-col items-start justify-start gap-3">
            <h4 className="text-3xl font-semibold">Menu</h4>
            <p className="text-sm text-neutral-500">Home</p>
            <p className="text-sm text-neutral-500">Why Choose</p>
            <p className="text-sm text-neutral-500">Special Menu</p>
            <p className="text-sm text-neutral-500">Regular Food</p>
            <p className="text-sm text-neutral-500">Special Chefs</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h4 className="text-3xl font-semibold">Help</h4>
            <p className="text-sm text-neutral-500">Privacy</p>
            <p className="text-sm text-neutral-500">Terms & Conditions</p>
            <p className="text-sm text-neutral-500">Policy</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h4 className="text-3xl font-semibold">Contact</h4>
            <p className="text-sm text-neutral-500">+000 0000 0000</p>
            <p className="text-sm text-neutral-500">info@foodied.com</p>
            <p className="text-sm text-neutral-500">1234 New Street, India</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h4 className="text-3xl font-semibold">Subscribe Our Newsletter</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your Email"
                className="rounded-lg border border-green-500 bg-transparent p-2"
              />
              <button className="rounded-lg rounded-r bg-green-500 p-2 text-white hover:bg-green-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mx-auto py-8 ">
          <p className="text-center text-black">
            © 2023 Foodied, Inc. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};
