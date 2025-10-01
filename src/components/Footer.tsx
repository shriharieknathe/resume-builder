const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-5 lg:mt-10 lg:h-20 flex flex-col lg:flex-row items-center justify-between px-5 py-2 lg:py-0 lg:px-16 xl:px-24 bg-[#385A64] font-medium text-white text-sm lg:text-base">
      <p>
        © {currentYear}{" "}
        <a
          href="https://www.linkedin.com/in/shriharieknathe/"
          className="text-teal-500 underline"
        >
          Shrihari Eknathe
        </a>
        . All rights reserved.
      </p>

      {/* <p>
        Made with ❤️ by{" "}
        <a href="https://harvi.me/" className="text-teal-500 underline">
          Harvi
        </a>
      </p> */}

      {/* adding social media links */}
      <div className="space-x-5 text-xl">
        <a href="https://github.com/shriharieknathe">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/shriharieknathe/">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="https://www.instagram.com/shriharieknathe">
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="https://twitter.com/shriharieknathe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
