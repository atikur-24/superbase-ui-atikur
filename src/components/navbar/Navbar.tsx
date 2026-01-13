import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Cart from "./Cart";
import MobileNavbar from "./MobileNavbar";
import NavAuth from "./NavAuth";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="shadow-[0_1px_4px_0_rgba(0,0,0,0.08)]">
      <Container>
        {/* for large screen */}
        <div className="hidden items-center justify-between gap-4 py-8 lg:flex">
          {/* logo */}
          <Logo />

          <div className="flex items-center gap-12">
            {/* nav items */}
            <NavItems />

            <div className="flex items-center gap-6">
              {/* shopping bag */}
              <Cart />

              {/* auth button */}
              <NavAuth />
            </div>
          </div>
        </div>

        {/* for small screen */}
        <div className="block py-5 lg:hidden">
          <MobileNavbar />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
