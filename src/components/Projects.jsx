import kinplus from '../assets/kinplus-site.png';
import quotes from '../assets/quotes.png'
import inventory from '../assets/inventory.png'
import realEstate from '../assets/urban-homes.png'

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-3xl lg:text-4xl text-secondary uppercase mx-6 font-inknut">
        Projects
      </h1>
      <div className="mt-8 items-center px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-10 lg:gap-4 ">

        {/* Project 1 */}
        
        <div className="border-2 border-secondary hover:shadow-lg">
        <div className="mx-4 my-4">
            <img
              src={kinplus}
              className="w-full h-32 object-center"
            />
          </div>
          <span className="font-bold text-secondary text-2xl md:text-2xl lg:text-xl pt-4 mx-4 font-hanuman md:text-center">
            Course Catalog
          </span>

          <div className='badge'>
            <span>
              HTML | CSS | JS
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className=" text-amber-100 text-sm font-hanuman md:block lg:block">
            This user-friendly platform allows applicants to effortlessly browse through the catalog of expert-led courses, each meticulously crafted to cater to various skill levels and interests.
            </span>
          </div>
          <a href="https://kinplustrainings.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="py-1 px-4 mx-6 mb-6 border-secondary border-2 text-secondary font-bold outline-none font-hanuman rounded-md hover:bg-secondary hover:border-secondary hover:text-primary">View</button>
          </a>
        </div>

{/* Project 2 */}

        <div className="border-2 border-secondary hover:shadow-lg">
        <div className="mx-4 my-4">
            <img
              src={quotes}
              className="w-full h-32 object-center"
            />
          </div>
          <span className="font-bold text-secondary text-2xl md:text-2xl lg:text-xl pt-4 mx-4 font-hanuman md:text-center">
            Quote Generator
          </span>

          <div className='badge'>
            <span>
              HTML | CSS | JS
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className=" text-amber-100 text-sm font-hanuman">
            With a simple click, this quote generator will unveil a diverse range of quotes from renowned philosophers, writers, leaders, and thinkers throughout history.
            </span>
          </div>
          <a href="https://jsquote-generator.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="py-1 px-4 mx-6 mb-6 border-secondary border-2 text-secondary font-bold outline-none font-hanuman rounded-md  hover:bg-secondary hover:border-secondary hover:text-primary">View</button>
          </a>
        </div>

{/* Project 3 */}

<div className="border-2 border-secondary hover:shadow-lg">
        <div className="mx-4 my-4">
            <img
              src={inventory}
              className="w-full h-32 object-center"
            />
          </div>
          <span className="font-bold text-secondary text-2xl md:text-2xl lg:text-xl pt-4 mx-4 font-hanuman md:text-center">
            Inventory Dashboard
          </span>

          <div className='badge'>
            <span>
              HTML | CSS | JS
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className=" text-amber-100 text-sm font-hanuman">
            This Inventory Dashboard serves as a command center for efficient inventory management and seamless control. Designed to empower businesses of all sizes.
            </span>
          </div>
          <a href="https://gadgets-inventory.netlify.app" target="_blank" rel="noopener noreferrer">
            <button className="py-1 px-4 mx-6 mb-6 border-secondary border-2 text-secondary font-bold outline-none font-hanuman rounded-md  hover:bg-secondary hover:border-secondary hover:text-primary">View</button>
          </a>
        </div>

{/* Project 4 */}
        <div className="border-2 border-secondary hover:shadow-lg">
        <div className="mx-4 my-4">
            <img
              src={realEstate}
              className="w-full h-32 object-center"
            />
          </div>
          <span className="font-bold text-secondary text-2xl md:text-2xl lg:text-lg pt-4 mx-4 font-hanuman md:text-center">
            Real Estate Landing Page
          </span>

          <div className='badge'>
            <span>
              ReactJS | TailwindCSS
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className=" text-amber-100 text-sm font-hanuman">
            Step into a world of possibilities as you explore an array of exceptional properties, each meticulously curated to match your unique preferences and aspirations.
            </span>
          </div>
          <a href="https://new-urban-homes-mouj.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="py-1 px-4 mx-6 mb-6 border-secondary border-2 text-secondary font-bold outline-none font-hanuman rounded-md  hover:bg-secondary hover:border-secondary hover:text-primary">View</button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;
