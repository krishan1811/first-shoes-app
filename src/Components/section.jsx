import Button from "./Button";
const btnStyle = "bg-red-700 px-3 py-2  text-white";
const btnStyle2 = "outline  outline-1 px-3 py-2  mx-6 font-semibold	";
function section() {
  return (
    <>
      <div className="flex container w-full m-auto mt-12 h-full">
        <section>
          <p className="text-9xl mb-4">
            <b>YOUR FEET DESERVE THE BEST</b>
          </p>
          <article className=" w-96 mb-6">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </article>
          <Button action="Shop Now" code={btnStyle}></Button>
          <Button action="Category" code={btnStyle2}></Button>

          <div className="mt-8 font-light	">Also Available on </div>
          <div className="flex gap-6">
            <img
              className="w-8"
              src="/public/amazon-a-logo-icon.svg"
              alt="available on amazone "
            />
            <img
              className="w-8"
              src="/public/flipkart-icon.svg"
              alt="availableon flipkart"
            />
          </div>
        </section>

        <aside className="container flex ">
          <img
            className="container w-auto"
            src="/src/assets/shoe_image.svg"
            alt="Shoe Design"
          />
        </aside>
      </div>
    </>
  );
}

export default section;
