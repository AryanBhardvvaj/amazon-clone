import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "./";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="pr-4 pl-4 hide-on-phone">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">India</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center ">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
        <img src="/images/indialogo.png" className="h-[30px] hide-on-mobile" alt="india"/>
        <select className="text-xs xl:text-sm bg-amazonclone-light_blue hide-on-mobile">
          <option>EN</option>
          <option>HIN</option>
          <option>FRC</option>
        </select>

          <div className="pr-4 pl-4 hide-on-mobile">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-3 pl-3 hide-on-mobile">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3 hide-on-phone">
            <img src="/images/cart.png" alt="cart" className="h-[48px]" id="cartlogo" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
            
          </Link>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div className="text-orange-400">Prime Day Deals</div>
        <div>Amazon miniTV</div>
        <div>Sell</div>
        <div>Amazon Pay</div>
        <div>Gift Cards</div>
        <div>Buy Again</div>

        <div >
          <img src="../images/primeday.png" alt="primeday" className="h-[24px] float-right" id="cartlogo" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
