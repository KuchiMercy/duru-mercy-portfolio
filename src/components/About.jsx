import profile1 from '../assets/profile1.jpg'


const About = () => {
  return (
    <div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around"  >
            <div>
                <h1 className="text-3xl md:text-3xl lg:text-4xl text-secondary uppercase mx-6 font-inknut">About</h1>
                <p className="mx-6 text-amber-100 py-6 md:py-4 text-m font-inknut lg:text-l">Proven expertise in <b><i>developing</i></b>  responsive, user-centric websites that align with brand identity and business objectives. <br /> <br /> Proficient at creating high-quality, SEO-optimized <b><i>content</i></b> that captures audiences and drives organic traffic. <br />  <br />
                A technical <b><i>product developer</i></b> skilled at collaborating with cross-functional teams to ensure that products meet technical specifications and market demands. <br /> <br /> Designing, developing, and delivering educational programs and resources related to technical subjects. <br /> <br /> Combining technical proficiency, creative problem-solving, and project management abilities—essential for successful product launches and long-term market success.</p>
            </div>
           <img className='rounded-full' width={350} src={profile1} alt="profile photo" /> 
           
    

         
        </div>
    </div>
  )
}

export default About