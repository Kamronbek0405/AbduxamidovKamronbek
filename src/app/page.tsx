"use client";
import Link from "next/link";
import About from "./about/page";
import 'aos/dist/aos.css';
import React from 'react';



export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="w-full h-[90vh] bg-vilote flex items-center justify-center ">
        <div className="container flex flex-col md:flex-row items-center justify-around w-full h-full px-4 md:px-16">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-10 ">
              I am Abduxamidov Kamronbek
            </h1>
            <p className="w-[100%] md:w-[500px]">
              I am a frontend developer currently looking for a job. I graduated from the "Najot ta’lim" course.
            </p>
          </div>
          <div className="animate-fade-in container_shadow w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex items-center justify-center p-6 rounded-full">
            <img className="animate-fade-in" src="/image.png" alt="img" />
          </div>
        </div>
      </section>

      <section>
        <About />
      </section>

      <section className="bg-vilote w-full h-[80vh]">
        <div className="container mx-auto w-full h-full flex flex-col items-center justify-start py-20">
          <h1 className="text-2xl md:text-4xl font-bold text-white animate-fade-in">
            Languages I have learned
          </h1>
          <div className="flex items-center lg:mt-20 gap-4 md:gap-10 flex-wrap mt-20 ml-12 md:mt-10">
          <Link href={"https://www.w3schools.com/html/"} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full transition-transform duration-500 hover:rotate-[360deg]">
        <img src="/html.png" alt="html" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </Link>
      <Link href={"https://css-tricks.com/snippets/css/complete-guide-grid/"} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full transition-transform duration-500 hover:rotate-[360deg]">
        <img src="/css.png" alt="css" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </Link>
      <Link href={"https://sass-lang.com/"} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full transition-transform duration-500 hover:rotate-[360deg]">
        <img src="/sass.png" alt="sass" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </Link>
      <Link href={"https://www.javascript.com/"} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full transition-transform duration-500 hover:rotate-[360deg]">
        <img src="/js.png" alt="javascript" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
      </Link>
      <Link href={"https://react.dev/"} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full transition-transform duration-500 hover:rotate-[360deg]">
        <img src="/react.png" alt="react" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </Link>
      <Link href={"https://nextjs.org/"} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full transition-transform duration-500 hover:rotate-[360deg]">
        <img src="/nextjs.png" alt="nextjs" className="w-[30px] h-[20px] md:w-[40px] md:h-[25px]" />
      </Link>
      <Link href={"https://www.typescriptlang.org/"} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-colorIcon rounded-full transition-transform duration-500 hover:rotate-[360deg]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
      </Link>

          </div>
        </div>
      </section>

    
   
    </div>
  );
}
