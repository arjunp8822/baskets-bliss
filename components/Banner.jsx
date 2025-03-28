"use client";

const Banner = () => {
  const handleExploreClick = () => {
    // Scroll to the element with the "products" id
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col-reverse md:flex-row h-[calc(100vh-110px)] md:h-[40vw] w-full gap-4 md:gap-0 mx-auto max-w-[1400px]">
      <div className="w-full md:w-[45%] flex flex-col gap-2 md:gap-4 justify-center px-4 md:px-8 h-[50%] md:h-full">
        <h1 className="text-[28px] md:text-[34px] lg:text-[40px]">
          Baskets for every blissful moment
        </h1>
        <p className="text-[14px] md:text-[16px]lg:text-[18px] text-gray-600">
          Treat yourself or your loved ones to our beautiful handmade gift
          hampers, crafted with care to make every moment special. From our
          hearts to yours, we&apos;re here to help you share the love.
        </p>
        <button
          onClick={handleExploreClick}
          className="btn border hover:border-[var(--primary)] hover:text-[var(--primary)] bg-[var(--primary)] hover:bg-white text-white transition-all cursor-pointer mt-4 md:mt-8"
        >
          Explore the range
        </button>
      </div>
      <div className="bg-gray-100 w-full md:w-[55%] flex items-center justify-center h-[50%] md:h-full">
        {/* Add an image here */}
      </div>
    </div>
  );
};

export default Banner;
