import React from "react";
import Navbar from "../components/Navbar";

export default function PortfolioSite() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            Portfolio website
          </h1>
          <p className="mb-8 py-10 leading-relaxed">
            This is the most meta of my portfolio projects, and I think it
            pairs well with my Google Scripts project. I don't think I really
            need to describe this project as you are currently using it. Just in case: I built a portfolio website to
            advertise my coding ability.
            <br></br>
            I'm of the opinion that my best quality as a candidate isn't my skill in
            any particular software tool or language, but my ability to learn
            new things quickly.
            <br></br>
            <br></br>I made this portfolio in about 2 weeks and spent perhaps 20 hours on it in total. I know it's not the
            most impressive website and a lot of it isn't very different from the
            example I based it on, but I still think it's something I can boast
            about. It'd been {">"}3 years since I last had to use html and I had no
            React.js experience whatsoever. As an embedded-systems guy I have no
            direct reason to learn any of this.
            <br></br>
            <br></br>
            I was so inexperienced with this are that, at the time of creation, I
            didn't know how I was going to take this from a locally running node
            application to a publically accessible webpage.
            <br></br>
            <br></br>
            On my{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kloovt/Portfolio"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              GitHub page
            </a>{" "}
            you can find the example I used and the changes I made.
          </p>
        </div>
      </div>
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              What I learned
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I learned how to use React.js and Tailwind CSS. I used this
              portfolio as a proof of concept for my next school assignment
              which will also be based on these. I also got some practice with
              design for the logo.
              <br></br>
              <img
                src="./JvT_logo.svg"
                alt=""
                className="inline-block mr-3 h-6"
              ></img>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
