const About = () => {
    return (
      <div className='bg-vilote w-full h-[100vh]'>
        <div className='container flex flex-col md:flex-row items-center justify-around md:gap-32 w-full h-full px-4 md:px-16'>
          <div className='w-full md:w-[400px] mb-5 md:mb-0'>
            <p className="leading-7 md:leading-10 animate-fade-in">
              I am Abdukhamidov Kamronbek, 19 years old. I am interested in frontend programming. Currently, I have graduated in the field of programming and I am looking for a job. Najot Ta'lim is where I was trained.
            </p>
          </div>
          <div className='animate-fade-in w-full md:w-[400px] h-[300px] md:h-[400px] bg-[url("https://sinaps.uz/wp-content/uploads/2023/07/n1-pm-id-293-800x394.jpg")] bg-cover bg-no-repeat shadow-lg shadow-black'>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  