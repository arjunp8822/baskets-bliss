const Footer = () => {
  return (
    <div className="px-3 md:px-8 py-8 mt-16 bg-[var(--secondary)] min-h-[200px] flex flex-col justify-center items-center gap-8 text-sm">
      <ul className="flex flex-col md:flex-col gap-3 md:gap-16 justify-center items-center">
        <li className="hover:underline transition-all cursor-pointer">
          Terms and Conditions
        </li>
        <li className="hover:underline transition-all cursor-pointer">
          Privacy Policy
        </li>
        <li className="hover:underline transition-all cursor-pointer">
          Returns and Exchanges
        </li>
      </ul>
      <p className="flex justify-center items-center">
        &#169; 2025 Baskets Bliss. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
