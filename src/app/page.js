import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#F2F0FF] min-h-screen">
      {/* Top Bar */}
      <div className="bg-purple-600 text-white">
        <div className="container mx-auto flex justify-between items-center py-2 text-sm">
          {/* Contact Info */}
          <div className="flex space-x-4">
            <span>
              <i className="fa fa-envelope"></i> mhhasanul@gmail.com
            </span>
            <span>
              <i className="fa fa-phone"></i> (12345)67890
            </span>
          </div>
          {/* Language, Currency, and Login Options */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">
              English
            </Link>
            <Link href="#" className="hover:underline">
              USD
            </Link>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/wishlist" className="hover:underline">
              Wishlist <i className="fa fa-heart"></i>
            </Link>
            <Link href="/cart" className="hover:underline">
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white text-gray-800 shadow">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-purple-600">
            <Link href="/">Hekto</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-pink-500 hover:text-pink-600">
              Home
            </Link>
            <Link href="/pages" className="hover:text-gray-600">
              Pages
            </Link>
            <Link href="/products" className="hover:text-gray-600">
              Products
            </Link>
            <Link href="/blog" className="hover:text-gray-600">
              Blog
            </Link>
            <Link href="/shop" className="hover:text-gray-600">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 flex items-center">
        {/* Left Side Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src="https://s3-alpha-sig.figma.com/img/b0ab/7b45/906d2aaf430d5bb6b86d462a9e91a8af?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ru5FvQWpcV868wGcCK~xH6e7UhX-06Q3XHFW9Bnqb3HO9a7iFJ9GJrrBuvPPHzRTM0-6mnkMblakg2OOPfcmzyHe0iPO0ffZe1xyS4B7nqdGZcnwOlSnVQ8lxqGQstUKlcOKtUoMJpDulFOSTbsrMxn39gV9Cq9soIFoZVTJW2rtgRB2hgD8uBrutAXL0Tdd4mOUUqnGyaYYtv5IsXiyPIKnuSsY~tJFQwYDMy4Gi~ApHpnxXqbDAOHx4xr8nOjnMVAilMm6~ObNX3Menc55vzwXc1PfguQEZvj-4C1GjedbdVqknYw0J0sseLl2A39w6S1SSWprrkBFh5UPUbsOhQ__"
            alt="Left Side Image"
            className="w-full h-auto object-cover rounded-lg"
            style={{
              width: "387px",
              objectFit: "cover",
              borderRadius: "8px",
              marginTop: "-139px",
            }}
          />
        </div>

        {/* Content on the Center (Aligned Left) */}
        <div className="flex justify-center w-full md:w-1/3 text-left">
          <div className="text-center md:text-left">
            <Link
              href="/shop"
              className="text-pink-500 hover:text-pink-600"
              style={{ lineHeight: "3", marginBottom: "20px" }}
            >
              Start Shopping
            </Link>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Hekto</h2>
            <p className="text-lg text-gray-600 mb-4">
              Explore our wide range of products, services, and more. We offer high-quality items at
              great prices!
            </p>
            <button
              className="bg-pink-500 text-white px-6 py-3 hover:bg-pink-400 transition duration-300"
              style={{ marginBottom: "40px" }}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Side Image (Slightly Moved Down) */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            src="https://s3-alpha-sig.figma.com/img/c453/494a/61ecc67b127029400b09a70cf2e9e973?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4hNwCnj7HBFQpBDLosNs7hWLdoO4p1cZF5PtHtw7zLfG3qfvhE~Bd7vQcIlm0UFNTBAvHLEabt7tHk6VW5oKndRqErp7KT4p6bCN5irLPII5c87VeyJANJjZB9edjdURV9IrQWV1yByYV8LecdKv9qGOvM4eFykZU4GZKeCppP9hB4TojNXhK4gFBSAv0g3eiZ35jHYo~hFSw0hyyQzDiMXAYcbA1KiVEGUQP-d196Wge-9pSh~garEnsdibk1Yh9gBnF2r0X1oRMKuIPJgjjBpUGLBKJoqT2ln3P8NEPwii0SYInsSQKzE5kcNk4Uyd917-IjOMPrtdWFSHIqznQ__"
            alt="Right Side Image"
            className="w-full h-auto object-cover rounded-lg"
            style={{
              width: "387px",
              objectFit: "cover",
              borderRadius: "8px",
              marginTop: "45px",
            }}
          />
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold" style={{ color: "#1A0B5B" }}>
          Featured Products
        </h2>

{/* Cards */}
<div className="flex justify-center gap-4 mt-8">
  {[
    { name: "chair", image: "https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dSmUctYaVtF1uF9vnlnhSqDJUDEJI99klIWO40AVBz2hCZFI3a0UOEhofBlLX2gcO1MHeDWRtqO7bFp8M9VXAygBp7ccI-2FHFHN1sbPy9FVwzqOoe3SPQt9xnzLyeZOv~~x0WujmABv8o6w08d0CfejhLE7bcO5nkNnYUpfkL7rTHw1-2FY8SfJEAkkxd58CFwoiR~ZkTdYcS3oQKWaJ1gJ88OZSyO3VOVwpDv1M1Dh1o1IfzezZ96fme~9wFwPOTCYLflphrtPK0Heg8jQkKOl-NIyVndb1G6Kyk-aI6PKR-kLW7sdUKhI6yc0uml7vLRgA18QJQljJYt14rKhvw__" },
    { name: "chair", image: "https://s3-alpha-sig.figma.com/img/db5f/e91e/81f40d5069977639c120b46b02efd85d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dR4rI2FVIyMP2NwY10YnmyoQmx8k~mkJm5Qmx1yylksNaJJjcGXvOX7M63OvO-PgbcPERoIJWhXBotbNBePTn3umQybwqrq1Wa-j2H93fSZj7vfwTZ8c9G2z-3Nz5v1to99r8ZRppjcuQMllTqMxVV0NmJiBNntE2e~N7NfI6KG7o8x-mtfb7cL8mQUg4zmZwPhWDUYCFDWBS2AFC3x2SCmA9zdCJUKg4M5ImfCGmNjYbgcFgCfSC4ib8WLLh70ybd2~pTeculpSzIODXW8M~bnsKCht-v4h4lYukWe4SHv3799e4v3BTRpUlQ2qq0rv3-~bvItKfnEKRKBB4ve7AQ__" },
    { name: "chair", image: "https://s3-alpha-sig.figma.com/img/ac53/427c/ec2feb66129667973939b2ea5191c695?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFogNHm01Df4h9osfR6qPKuo-916tuu6hP8LmH9zSPLICjGI-FsxJqxATfs9fmfM2i98arEa9lSlOnVCXZbkWoDWPipbgs~imYPgjIpCuqFWwgjKoiynC5xSf3H5LyXCF5Qoeb~oNRpOgthO8Se6MvF6dcxnMNZYf0I5IfUY3xR-hNhx016xfXMdxpdVlwJd8xDIxqPq2qkOkSgcl6YMp9hBIt~RMDkurM8p6jWbdvgs1VqXNdo9h2OllxD5g~LwS6S5bg9tuaQZtJnz4q~Cfuo-pRW84AKFHdYfuk7huioDMxfxJNm4-Gdg5OlXTAmVS9f9C2K3kpr68-RzEvFLrw__" },
    { name: "Product 4", image: "https://s3-alpha-sig.figma.com/img/fe50/2c91/678776be52471704ed6aa26cd1d28dd8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMmy26Eq7T6WGuk8zQwL6wAzCPNpQVukEfrQdbjclR5H5KXQ5jw-Jh5c-mDPx8pEOG~Byy6kbLi6ZWP~dfxPAjZDqCTYe7GJ7s6xNnZHlGoLvoaRfqmn0pGJ0mwoep7UYjM2JsJSy1Ks7DUtPGGzobUTceLbAnZUtb1PjEeTjvgbq~bNQn7sjO6-~QM23hNSH9rwjpLku3sswtwLtxYRpq6HvHyzG7wn928agJtrYpwuSW0EOhbBdD7J2F~1fgAP0hyuujXx~50SwddBWKTVPl~OvEu4il3BvGSJDAQ9ra0oUgHCdA11AaEl-YuwXcX7iHDZJzrf9yIdGuic3~Vj4A__" }
  ].map((product, index) => (
    <div
      key={index}
      className="bg-white w-[270px] h-[361px] shadow-lg rounded-lg opacity-100"
    >
      <div className="bg-gray-200 w-full h-2/3 rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3
          className="font-lato font-bold text-[18px] leading-[21.6px] text-left underline"
          style={{ textUnderlinePosition: "from-font", textDecorationSkipInk: "none" }}
        >
          {product.name}
        </h3>
        <p
          className="font-josefin-sans text-[14px] leading-[16.41px] text-left mt-2"
          style={{ color: "#151875" }}
        >
          Code - Y523201
        </p>
        <p
          className="font-lato text-[14px] leading-[16.8px] text-left mt-2"
          style={{ color: "#151875" }}
        >
          $42.00
        </p>
      </div>
    </div>
  ))}
</div>
{/* Featured Products Section */}
<div className="text-center mt-20">
  <h2 className="text-3xl font-bold" style={{ color: "#1A0B5B" }}>
    Last Products
  </h2>
</div>


{/* Cards */}
<div className="flex justify-center gap-4 mt-8">
  {[ 
    { name: "Chair 1", image: "https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dSmUctYaVtF1uF9vnlnhSqDJUDEJI99klIWO40AVBz2hCZFI3a0UOEhofBlLX2gcO1MHeDWRtqO7bFp8M9VXAygBp7ccI-2FHFHN1sbPy9FVwzqOoe3SPQt9xnzLyeZOv~~x0WujmABv8o6w08d0CfejhLE7bcO5nkNnYUpfkL7rTHw1-2FY8SfJEAkkxd58CFwoiR~ZkTdYcS3oQKWaJ1gJ88OZSyO3VOVwpDv1M1Dh1o1IfzezZ96fme~9wFwPOTCYLflphrtPK0Heg8jQkKOl-NIyVndb1G6Kyk-aI6PKR-kLW7sdUKhI6yc0uml7vLRgA18QJQljJYt14rKhvw__" },
    { name: "Chair 2", image: "https://s3-alpha-sig.figma.com/img/db5f/e91e/81f40d5069977639c120b46b02efd85d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dR4rI2FVIyMP2NwY10YnmyoQmx8k~mkJm5Qmx1yylksNaJJjcGXvOX7M63OvO-PgbcPERoIJWhXBotbNBePTn3umQybwqrq1Wa-j2H93fSZj7vfwTZ8c9G2z-3Nz5v1to99r8ZRppjcuQMllTqMxVV0NmJiBNntE2e~N7NfI6KG7o8x-mtfb7cL8mQUg4zmZwPhWDUYCFDWBS2AFC3x2SCmA9zdCJUKg4M5ImfCGmNjYbgcFgCfSC4ib8WLLh70ybd2~pTeculpSzIODXW8M~bnsKCht-v4h4lYukWe4SHv3799e4v3BTRpUlQ2qq0rv3-~bvItKfnEKRKBB4ve7AQ__" },
    { name: "Chair 3", image: "https://s3-alpha-sig.figma.com/img/ac53/427c/ec2feb66129667973939b2ea5191c695?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFogNHm01Df4h9osfR6qPKuo-916tuu6hP8LmH9zSPLICjGI-FsxJqxATfs9fmfM2i98arEa9lSlOnVCXZbkWoDWPipbgs~imYPgjIpCuqFWwgjKoiynC5xSf3H5LyXCF5Qoeb~oNRpOgthO8Se6MvF6dcxnMNZYf0I5IfUY3xR-hNhx016xfXMdxpdVlwJd8xDIxqPq2qkOkSgcl6YMp9hBIt~RMDkurM8p6jWbdvgs1VqXNdo9h2OllxD5g~LwS6S5bg9tuaQZtJnz4q~Cfuo-pRW84AKFHdYfuk7huioDMxfxJNm4-Gdg5OlXTAmVS9f9C2K3kpr68-RzEvFLrw__" },
  ].map((product, index) => (
    <div
      key={index}
      className="bg-white w-[270px] h-[361px] shadow-lg rounded-lg opacity-100"
    >
      <div className="bg-gray-200 w-full h-2/3 rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3
          className="font-lato font-bold text-[18px] leading-[21.6px] text-left underline"
          style={{ textUnderlinePosition: "from-font", textDecorationSkipInk: "none" }}
        >
          {product.name}
        </h3>
        <p
          className="font-josefin-sans text-[14px] leading-[16.41px] text-left mt-2"
          style={{ color: "#151875" }}
        >
          Code - Y523201
        </p>
        <p
          className="font-lato text-[14px] leading-[16.8px] text-left mt-2"
          style={{ color: "#151875" }}
        >
          $42.00
        </p>
      </div>
    </div>
  ))}
</div>


{/* Cards */}
<div className="flex justify-center gap-4 mt-8">
  {[ 
    { name: "Chair 1", image: "https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dSmUctYaVtF1uF9vnlnhSqDJUDEJI99klIWO40AVBz2hCZFI3a0UOEhofBlLX2gcO1MHeDWRtqO7bFp8M9VXAygBp7ccI-2FHFHN1sbPy9FVwzqOoe3SPQt9xnzLyeZOv~~x0WujmABv8o6w08d0CfejhLE7bcO5nkNnYUpfkL7rTHw1-2FY8SfJEAkkxd58CFwoiR~ZkTdYcS3oQKWaJ1gJ88OZSyO3VOVwpDv1M1Dh1o1IfzezZ96fme~9wFwPOTCYLflphrtPK0Heg8jQkKOl-NIyVndb1G6Kyk-aI6PKR-kLW7sdUKhI6yc0uml7vLRgA18QJQljJYt14rKhvw__" },
    { name: "Chair 2", image: "https://s3-alpha-sig.figma.com/img/db5f/e91e/81f40d5069977639c120b46b02efd85d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dR4rI2FVIyMP2NwY10YnmyoQmx8k~mkJm5Qmx1yylksNaJJjcGXvOX7M63OvO-PgbcPERoIJWhXBotbNBePTn3umQybwqrq1Wa-j2H93fSZj7vfwTZ8c9G2z-3Nz5v1to99r8ZRppjcuQMllTqMxVV0NmJiBNntE2e~N7NfI6KG7o8x-mtfb7cL8mQUg4zmZwPhWDUYCFDWBS2AFC3x2SCmA9zdCJUKg4M5ImfCGmNjYbgcFgCfSC4ib8WLLh70ybd2~pTeculpSzIODXW8M~bnsKCht-v4h4lYukWe4SHv3799e4v3BTRpUlQ2qq0rv3-~bvItKfnEKRKBB4ve7AQ__" },
    { name: "Chair 3", image: "https://s3-alpha-sig.figma.com/img/ac53/427c/ec2feb66129667973939b2ea5191c695?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFogNHm01Df4h9osfR6qPKuo-916tuu6hP8LmH9zSPLICjGI-FsxJqxATfs9fmfM2i98arEa9lSlOnVCXZbkWoDWPipbgs~imYPgjIpCuqFWwgjKoiynC5xSf3H5LyXCF5Qoeb~oNRpOgthO8Se6MvF6dcxnMNZYf0I5IfUY3xR-hNhx016xfXMdxpdVlwJd8xDIxqPq2qkOkSgcl6YMp9hBIt~RMDkurM8p6jWbdvgs1VqXNdo9h2OllxD5g~LwS6S5bg9tuaQZtJnz4q~Cfuo-pRW84AKFHdYfuk7huioDMxfxJNm4-Gdg5OlXTAmVS9f9C2K3kpr68-RzEvFLrw__" },
  ].map((product, index) => (
    <div
      key={index}
      className="bg-white w-[270px] h-[361px] shadow-lg rounded-lg opacity-100"
    >
      <div className="bg-gray-200 w-full h-2/3 rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3
          className="font-lato font-bold text-[18px] leading-[21.6px] text-left underline"
          style={{ textUnderlinePosition: "from-font", textDecorationSkipInk: "none" }}
        >
          {product.name}
        </h3>
        <p
          className="font-josefin-sans text-[14px] leading-[16.41px] text-left mt-2"
          style={{ color: "#151875" }}
        >
          Code - Y523201
        </p>
        <p
          className="font-lato text-[14px] leading-[16.8px] text-left mt-2"
          style={{ color: "#151875" }}
        >
          $42.00
        </p>
      </div>
    </div>
  ))}
</div>

{/* Featured Products Section */}
<div className="text-center mt-20">
  <h2 className="text-3xl font-bold" style={{ color: "#1A0B5B" }}>
    What Shopex Over
  </h2>
</div>


{/* Cards */}
<div className="flex justify-center gap-4 mt-8">
  {[
    { heading: "24/7", para: "This is the description for card 1." },
    { heading: "Card 2 Heading", para: "This is the description for card 2." },
    { heading: "Card 3 Heading", para: "This is the description for card 3." },
    { heading: "Card 4 Heading", para: "This is the description for card 4." }
  ].map((card, index) => (
    <div
      key={index}
      className="bg-white w-[270px] h-[250px] shadow-lg rounded-lg flex flex-col justify-center items-center p-4"
    >
      <h3 className="text-xl font-semibold mb-2 text-center text-black">{card.heading}</h3>
      <p className="text-gray-600 text-center">{card.para}</p>
    </div>
  ))}
</div>





<footer className="bg-white text-black py-8 w-full">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="flex justify-between">
      {/* Left Side: Morent and Paragraph */}
      <div className="w-1/4">
      <h1 className="text-pink-500 font-bold" style={{fontSize:'32px'}}>HEKTO</h1>
      <p className="mt-2" style={{ bottom: '70px' }}>Your content about HEKTO.</p>
      </div>

    {/* Right Side: About, Community, and Socials */}
    <div className="flex space-x-16 ml-40">
        {/* About Section */}
        <div className="w-1/3">
          <h3 className="text-xl font-bold">About</h3>
          <div className="flex flex-col space-y-2 mt-4"> {/* Stack links vertically */}
            <a href="/terms" className="text-gray-400 hover:text-gray-200">How itwork</a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-200">Featured</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Partnership</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Business</a>

          </div>
        </div>

        {/* Community Section */}
        <div className="w-1/3">
          <h3 className="text-xl font-bold">Community</h3>
          <div className="flex flex-col space-y-2 mt-4"> {/* Stack links vertically */}
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Events</a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-200">Blog</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Podcast</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Invite a friend</a>

          </div>
        </div>

        {/* Socials Section */}
        <div className="w-1/3">
          <h3 className="text-xl font-bold">Socials</h3>
          <div className="flex flex-col space-y-2 mt-4"> {/* Stack links vertically */}
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Discord</a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-200">Instagram</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Twitter</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Facebook</a>

          </div>
        </div>
      </div>
    </div>
    
    {/* Copyright Section */}
    <div className="bg-white text-center py-4 mt-8 flex justify-between items-center px-4">
      {/* Left Side: Copyright */}
      <p className="text-sm"> &copy; {new Date().getFullYear()} Hekto. All Rights Reserved.</p>

      {/* Right Side: Terms and Conditions and Privacy Policy Links */}
      <div className="text-sm">
        <a href="/terms" className="text-gray-400 hover:text-white mx-4">Terms and Conditions</a>
        <a href="/privacy" className="text-gray-400 hover:text-white mx-4">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>




      </div>
    </div>





  );
}
