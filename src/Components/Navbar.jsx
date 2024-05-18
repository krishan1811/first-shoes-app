import Button from "./Button";
export default function Navbar() {
  const btnStyle = "bg-red-700 px-3 py-2 gap-3 mx-8 text-white	";
  return (
    <>
      <div className="flex justify-between items-center h-[4.5rem]">
        <div className="m-6 w-24 ">
          <img src="/src/assets/brand_logo.svg" alt="" />
        </div>
        <ul className="flex gap-6">
          <li className="">Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
        <Button action="Login" code={btnStyle}></Button>
      </div>
    </>
  );
}
