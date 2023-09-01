

const Header = () => {
  return (
    <div>
        <header className="py-12 ">
        <h1 className="text-2xl md:text-2xl lg:text-3xl text-white uppercase mx-6 font-inknut">
          Developer
          <span className="text-secondary font-medium">& Content Writer</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl pt-4 text-white font-bold mx-6 font-hanuman">
          Mercy Duru
        </h2>
        <p className="mx-6 text-amber-100 py-6 md:py-4 text-m font-inknut lg:text-l">
          Results-driven Website Developer <br /> and Content Writer with a
          passion for crafting <br /> engaging digital experiences.
        </p>
        <div className="mx-3 mt-10">
          <span className="py-1 px-4 mx-3 bg-secondary border-secondary border-2 text-primary font-bold outline-none font-hanuman">
            Develop
          </span>
          <span className="py-1 px-5 mx-3 border-secondary border-2 text-secondary font-bold outline-none font-hanuman">
            Create
          </span>
        </div>

        <div className=" container flex flex-row items-center px-4 pt-10 ">
          {/* git */}

          <a
            href="https://github.com/KuchiMercy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 496 512"
              fill="#fef3c7"
              className=" w-8 h-8 mx-4 md:mr-4 lg:mr-6 cursor-pointer transition ease-out duration-500 hover:border-b-2 outline-none "
            >
              {" "}
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/mercy-duru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="#fef3c7"
              className="w-8 h-8 mx-4 md:mr-4 lg:mr-6 cursor-pointer transition ease-out duration-500 hover:border-b-2 outline-none"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>

          {/* mail */}
          <a href="mailto:durumercy206@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mx-4 md:mr-4 lg:mr-6 text-amber-100 cursor-pointer transition ease-out duration-500 hover:border-b-2 outline-none"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header