import About from "./about/page";
export default function Home() {
  return (
    <div>
      <section className="w-full h-[90vh] bg-vilote flex items-center justify-center">
        <div className="container flex flex-col md:flex-row items-center justify-around w-full h-full px-4 md:px-16">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-10">
              I am Abduxamidov Kamronbek
            </h1>
            <p className="w-[100%] md:w-[500px]">
              I am a frontend developer currently looking for a job. I graduated from the "Najot ta’lim" course.
            </p>
          </div>
          <div className="container_shadow w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex items-center justify-center p-6 rounded-full">
            <img src="/image.png" alt="img" />
          </div>
        </div>
      </section>

      <section>
        <About />
      </section>
 
      <section className="bg-vilote w-full h-[80vh]">
  <div className="container mx-auto w-full h-full flex flex-col items-center justify-start py-20" >
    <h1 className="text-2xl md:text-4xl font-bold text-white">
      Languages I have learned
    </h1>
    <div className="flex items-center lg:mt-20 gap-4 md:gap-10 flex-wrap mt-20 ml-12  md:mt-10  ">
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full">
        <img src="/html.png" alt="html" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </div>
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full">
        <img src="/css.png" alt="css" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </div>
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full">
        <img src="/sass.png" alt="sass" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </div>
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full">
        <img src="/js.png" alt="javascript" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
      </div>
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full">
        <img src="/react.png" alt="react" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </div>
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full">
        <img src="/nextjs.png" alt="nextjs" className="w-[30px] h-[20px] md:w-[40px] md:h-[25px]" />
      </div>
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
