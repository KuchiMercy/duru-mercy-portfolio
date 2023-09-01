import { useState } from "react";
import website from "../assets/web-dev-2.png";
import content from "../assets/writer4.png";
import product from "../assets/product-dev.png";
import tech from "../assets/tech.png";

const Services = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div>
      <h1 className="text-3xl md:text-3xl lg:text-4xl text-secondary uppercase mx-6 font-inknut lg:mx-10">
        Services
      </h1>

      {/* First card */}
      <div className="mt-8 items-center px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-10 lg:gap-4">
        <div className="card hover:shadow-lg">
          <div className="mx-4 my-4">
            <img
              src={website}
              className=" bg-amber-100 w-full h-32 object-center"
            />
          </div>

          <span className="font-bold text-secondary text-2xl md:text-2xl lg:text-xl pt-4 mx-4 font-hanuman md:text-center">
            Website Development
          </span>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">Website Design:</span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Creating the overall look and feel of the website. <br />
              Designing layout, color schemes, typography, and imagery to
              establish the website visual identity.
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">Responsive Design:</span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Ensuring that the website functions and looks well across various
              devices and screen sizes, including desktops, tablets, and
              smartphones.
            </span>
          </div>
          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">Frontend Frameworks:</span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Utilizing frontend frameworks like Bootstrap, tailwindCSS and
              Reactjs to streamline development and ensure consistency.
            </span>
          </div>

          {isShowMore && (
            <div>
              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  User Interface (UI) Design:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Designing the graphical user interface elements, such as
                  buttons, forms, navigation menus, and interactive elements.
                </span>
              </div>
              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">HTML/CSS Coding:</span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Writing clean, semantic HTML code for the website structure.
                  Styling the website using CSS to control the presentation and
                  layout.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  JavaScript Development:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Adding interactivity and dynamic behavior to the website using
                  JavaScript.
                </span>
              </div>
              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Cross-Browser Compatibility:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Ensuring the website functions consistently across different
                  web browsers, including Chrome, Firefox, Safari, and Edge.
                </span>
              </div>
              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">Version Control:</span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Using version control systems like Git to manage code changes
                  and collaborate effectively with other team members.
                </span>
              </div>
              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Cross-Browser Compatibility:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Ensuring the website functions consistently across different
                  web browsers, including Chrome, Firefox, Safari, and Edge.
                </span>
              </div>
              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Integration with Backend:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Collaborating with backend developers to integrate frontend
                  components with the backend infrastructure.
                </span>
              </div>
            </div>
          )}

          <button
            onClick={toggleReadMoreLess}
            className="py-1 px-4 mx-6 mb-6 border-secondary border-2 text-secondary font-bold outline-none font-hanuman rounded-md"
          >
            {isShowMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* //Second card */}
        <div className="card hover:shadow-lg">
          <div className="mx-4 my-4">
            <img
              src={content}
              className="bg-amber-100 w-full h-32 object-center"
            />
          </div>
          <span className="font-bold text-secondary text-2xl md:text-2xl lg:text-xl pt-4 mx-4 font-hanuman md:text-center">
            Content Writing
          </span>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut"> Blog Posts:</span>
            <span className=" block text-gray-700 text-sm font-hanuman">
              Writing informative and engaging blog articles on a wide range of
              topics.
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">Website Content:</span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Crafting compelling copy for website pages, including homepages,
              about pages, services pages, and more.
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">SEO Content:</span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Creating content that is optimized for search engines, including
              keyword-rich articles and meta descriptions.
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">Social Media Posts:</span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Writing concise and attention-grabbing content for social media
              platforms like Facebook, Twitter, Instagram, and LinkedIn.
            </span>
          </div>

          {isShowMore && (
            <div>
              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Product Descriptions:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Creating persuasive product descriptions for e-commerce
                  websites that highlight features and benefits.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Interviews and Profiles:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Conducting interviews and writing profiles on individuals,
                  companies, or products.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Editing and Proofreading:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Reviewing and refining existing content for grammar, clarity,
                  and style.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">Ghostwriting:</span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Writing content on behalf of others, such as thought
                  leadership articles or speeches.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">Guest Blogging:</span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Writing articles to be published on other websites to expand
                  reach and authority.
                </span>
              </div>
            </div>
          )}
          <button
            onClick={toggleReadMoreLess}
            className="py-1 px-4 mx-6 mb-6 border-secondary border-2 text-secondary font-bold outline-none font-hanuman rounded-md"
          >
            {isShowMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* //Third card */}
        <div className="card  hover:shadow-lg">
          <div className="mx-4 my-4">
            <img
              src={product}
              className=" bg-amber-100 w-full h-32 object-center"
            />
          </div>
          <span className="font-bold text-secondary text-2xl md:text-2xl lg:text-xl pt-4 mx-4 font-hanuman md:text-center">
            Product Development
          </span>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">
              User Story Development:
            </span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Outline the users need, their goals, and the reasons they require
              the feature or functionality in a brief, informal description from
              the viewpoint of the end user.
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">
              Collaboration with Cross-functional Teams:
            </span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Coordinating with design, marketing, sales, and other teams to
              bring the product to market successfully.
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">
              Consultation and Advisory:
            </span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Providing technical expertise and recommendations to guide clients
              through the product development process.
            </span>
          </div>

          {isShowMore && (
            <div>
              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Concept Development:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Generating innovative ideas for new products or product
                  improvements based on market research and user needs.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Engineering and Development:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Collaborating with engineers to ensure the products technical
                  feasibility and functionality.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Manufacturing Support:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Overseeing the manufacturing process to ensure quality
                  control, cost-effectiveness, and timely production.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Feasibility Analysis:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Evaluating the technical and commercial feasibility of product
                  concepts before initiating development.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Conceptualization and Ideation:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Generating novel ideas for technical products based on market
                  trends, emerging technologies, and user needs.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Feasibility Analysis:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Evaluating the technical and commercial feasibility of product
                  concepts before initiating development.
                </span>
              </div>
            </div>
          )}

          <button
            onClick={toggleReadMoreLess}
            className="py-1 px-4 mx-6 mb-6 border-secondary border-2 text-secondary font-bold outline-none font-hanuman rounded-md"
          >
            {isShowMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Fourth */}
        <div className="card  hover:shadow-lg">
          <div className="mx-4 my-4">
            <img
              src={tech}
              className=" bg-amber-100 w-full h-32 object-center"
            />
          </div>
          <span className="font-bold text-secondary text-2xl md:text-2xl lg:text-xl pt-4 mx-4 font-hanuman md:text-center">
            Tech Education
          </span>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">
              Lectures and Presentations:
            </span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Conducting workshops and training sessions on technical topics to
              enhance participants understanding and skills.
            </span>
          </div>

          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">
              Workshops and Training Sessions:
            </span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Delivering informative and engaging lectures or presentations on
              complex technical concepts.
            </span>
          </div>
          <div className="pt-2 mx-6 my-4">
            <span className="font-bold font-inknut">
              Curriculum Development:
            </span>
            <span className="block text-gray-700 text-sm font-hanuman">
              Designing educational curriculum and course materials that cover
              specific technical subjects.
            </span>
          </div>

          {isShowMore && (
            <div>
              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Online Courses and Webinars:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Creating and hosting online courses and webinars that allow
                  participants to learn remotely.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Industry Seminars and Talks:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Speaking at industry events, conferences, and seminars to
                  share insights on emerging technologies and trends.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  {" "}
                  Corporate Training:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Delivering customized training programs to organizations to
                  enhance their employees technical skills.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Career Development Advice:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Providing insights and advice on career paths and
                  opportunities within the technical domain.
                </span>
              </div>

              <div className="pt-2 mx-6 my-4">
                <span className="font-bold font-inknut">
                  Guest Speaking and Podcasts:
                </span>
                <span className="block text-gray-700 text-sm font-hanuman">
                  Participating in podcasts, interviews, and guest-speaking
                  engagements to share technical insights and knowledge.
                </span>
              </div>
            </div>
          )}

          <button
            onClick={toggleReadMoreLess}
            className="py-1 px-4 mx-6 mb-6 border-secondary border-2 text-secondary font-bold outline-none font-hanuman rounded-md"
          >
            {isShowMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
