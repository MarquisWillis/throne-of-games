import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function Nav({ currentPage, handlePageChange }) {
  const [openNav, setOpenNav] = useState(false);

  // const [isShown, setIsShown] = useState(false)
  // // // const handleClick = event => {
  // //   // setIsShown(current => !current);
  // // }
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    
  }, []);

  const navList = (
    
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-4 font-normal"
      > 
       <a href="#store"
        onClick={() => handlePageChange('Store')}
        className={currentPage === 'Store' ? 'nav-link active' : 'nav-link'}>
        <span class="text-sm-4 font-press-start underline">Store</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-3 font-normal"
      >
        <a href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
           <span class="text-sm-4 font-press-start underline">Login</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-3 font-normal"
      >
        <a href="#signup"
          onClick={() => handlePageChange('Signup')}
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}>
          <span class="text-sm-4 font-press-start underline">SignUp</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
      </Typography>
      <Typography
        as='btn'
        variant='small'
        color="blue-gray"
        className="p-3 font-normal"
      >
        <Button onClick={() => handlePageChange('Cart')}>
        <span class="text-sm-4 font-press-start underline">Cart</span>
        </Button>

      </Typography>
    </ul>
    
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
      
        <Typography
          as="a"
          href="#store"
          variant="large"
          className="mr-4 cursor-pointer py-1.5 font-normal"
          onClick={() => handlePageChange('Store')}
        >
          <span class="text-2xl font-press-start underline">Throne of Games</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}