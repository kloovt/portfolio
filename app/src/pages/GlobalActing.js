import React from "react";
import Navbar from "../components/Navbar";

export default function GlobalActing() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            Global Acting & ICT minor
          </h1>
          <p className="mb-8 py-10 leading-relaxed">
            For my minor semester in late 2023 I chose to do the Global Acting & ICT minor offered by Fontys. This minor
            program is a collaboration between Belgium Campus (SA), Universitat de Lleida (ES), FH Oberösterreich (AT),
            Hogeschool PXL (BE), and my home institution of Fontys. 
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ambitieplanfontysict.nl/en/development-areas/global-acting/"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
               Here
            </a>{" "}
            is Fontys' description of it.
            <br></br>
            <br></br>
            With 20 students from 5 countries, we travelled from South Africa, to Spain, Austria, Belgium, and back to the
            Netherlands over a nearly 4 month long span. In every location we dove into a different field of technology: Data
            science, User Experience, Internet of Things, Machine Learning, and Cyber Security.
            <br></br>
            It was a life-defining adventure and I am very proud of myself. I had never been away from home as far or for as
            long as this. I have gone on safari, I've climbed mountains, I've explored disparate cultures, I've eaten many
            exciting new things, I have suffered hardship and I have made new friends. list of character-shaping experiences
            I had goes on and on.

            The students were split up into project groups. We worked on a project that aims to provide meaningful support to
            differently-abled people. In my honest opinion it wasn't well orchestrated, but I grew to appreciate the
            consistency of our project group.
            <br></br>
            <br></br>
            The first destination was South Africa. We were there for 4 weeks, most of which we spent learning the basics of
            data science. I did fine in the course, but I found South Africa to be much more educational. I had never been
            somewhere so fundamentally different from what I'm used to. The experience is impossible to do justice with words
            alone. I got a glimpse at impossibly fascinating subjects, such as the complexities of deeply-ingrained racial
            tensions, living in a society where the government is demonstrably incompetent, the inescapable evidence of
            widespread poverty, the painful and living memory of the unthinkably recent Apartheid regime, ever-present
            megafauna.
            <br></br>
            <br></br>
            The next destination was Spain, where I had fortunately been before. The module was on user experience, which
            is frankly not my forté. I did a decent job, but I was struggling with the Spanish schedule more than anything.
            Our classes were from 15:00 to 19:00, which took some getting used to. Outside our courses we made the best of
            our time by visiting nearby cities, swimming in the mediterranean, and even going stargazing.
            <br></br>
            <br></br>
            The next country was Austria. Here we did a module on IoT, which, as you can imagine, was already familiar. I
            made myself useful by helping my project teammates along. The workload in Austria was much higher than in the
            previous 2 locations. We still managed to do some exploration, such as visiting Halstatt, the most beautiful town
            I have ever been to. I got a 5/5 grade for this module, unsurprisingly.
            <br></br>
            <br></br>
            The last international destination was Belgium, which is frankly not dramatically different from the Netherlands.
            Fortunately they had the most fascinating module: machine learning. I was aware of the basics of artificial
            intelligence, but learning the intricacies of neural networks, etc. was very illuminating. I have gained an
            appreciation for the mechanical and mathematical nature of these exciting new technologies. My enthousiasm earned
            me another 5/5, one I'm much more proud of.
            <br></br>
            <br></br>
            The last module was back home in Eindhoven. It was about cybersecurity, which was mostly new, but not nearly as
            exciting. One thing I've learned to appreciate is experiencing your own culture with a foreigner. It really helps
            you look at your familiar surroundings from a fresh perspective.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="pretoria"
            src="./pretoria.jpg"
          />
          <p3>working together in Pretoria</p3>
          <img
            className=" mt-6 object-cover object-center rounded"
            alt="stargazing"
            src="./stargazing.jpg"
          />
          <p3>stargazing in Spain</p3>
        </div>
      </div>
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              What I learned
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              This semester was simultaneously the most challenging, most exciting, and most enlightening time of my life. It
              feels reductive to describe the educational value of an adventure like this one in a couple of phrases. In a
              direct sense I learned the fundamentals of data science, user experience, machine learning, and cybersecurity.
              More abstractly I learned to appreciate how lucky the Dutch are to have a government that generally makes our
              lives better, not actively worse. I relearned how rough homesickness can be. I learned how to take care of
              myself when abroad for multiple consecutive months. I learned how to deal with the logistics of longer-term
              international travel.
            <br></br>
            <br></br>
              Beyond technical and practical skills, I learned a lot about myself too. For years I have held the belief that
              I am an underachiever, but I was astounded by my ability to rise to the challenges presented to me.
              This semester taught me that I can achieve a lot more than I think, I just have to present myself with the
              right challenge. I also learned that I love international and intercultural settings. The wild diversity of
              experiences and attitudes make for the most fascinating of environments.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-7/8 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <img alt="ducks" src="./ducks.jpg" />
              <h4>ducks in Halstatt</h4>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <img alt="Wolfgang" src="./wolfgang.jpg" />
              <h4>I did most of the journey with my best vehicular friend Wolfgang</h4>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <img alt="parliament" src="./parliament.jpg" />
              <h4>I made a Europhile's pligrimage</h4>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <img alt="springbok" src="./springbok.jpg" />
              <h4>Springboks</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
