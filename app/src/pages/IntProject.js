import React from "react";
import Navbar from "../components/Navbar";

export default function IntProject() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            International Project
          </h1>
          <p className="mb-8 py-10 leading-relaxed">
            At the start of semester 4 in early 2022 I decided to participate in
            an international project. This project was a collaboration between
            Fontys UAS, FH Technikum Wien, and Lapin AMK, from Eindhoven (NL),
            Vienna (AT), and Rovaniemi (FI), respectively.{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.technikum-wien.at/en/news/robotics-for-industry-and-agriculture-completion-of-the-first-blended-intensive-program-at-the-uas-technikum-wien/"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Here
            </a>{" "}
            is an article from Technikum Wien about it.
            <br></br>
            <br></br>
            For the project we collaborated with students from the other
            universities in 3 groups. In my group we made a robot that sorts a
            rolling piece of fruit (simulated with a ping pong ball) by moving a
            robotic arm, which diverted the track. The colour was detected with
            a webcam attached to a Nvidia Jetson running a machine vision
            program. The communication went through MQTT and was monitered by a
            Node-RED dashboard that also allowed for data collection.
            <br></br>
            <br></br>
            The parts I was responsible for were the track and the dashboard. I
            designed and 3d printed the track. I put together the vast Node-RED
            dashboard mostly by myself. There's a gif showing the track I made
            and the stl files can be found{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nc.jorritvtriest.nl/s/9jbej8zcRHDwYfW"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              on my server
            </a>
            . In this folder you can also find the export file of the Node-RED
            dashboard (flows.json).
            <br></br>
            <br></br>
            Participating in this project had a big bonus; we got to travel to
            Rovaniemi and Vienna. We all traveled to Rovaniemi together in
            mid-February, except for me, because I'd caught Covid in the week
            leading up to the trip. Fortunately my quarantine ended in time for
            me to safely join the latter half of the trip. Rovaniemi is in
            spitting distance of the polar circle and it's noticeable; at one
            point the temperature on the rental Toyota Yaris read -20°C. Despite
            the weather and the untimely illness I had a great time. Rovaniemi
            is a fascinating place to be. It's a defiant island of comfortable
            civilisation in a desolate and hostile wilderness.
            <br></br>
            <br></br>
            In the middle of May we made the second journey of the project. We
            reunited with the team members we'd met in Finland and continued
            work on the project in person. At the end of the week we presented
            our results to our teachers, the other participants of the project,
            and a panel of industry specialists. I loved my time in Vienna. It
            is undoubtedly one of the most beautiful cities I have ever been to.
            I got to see and experience many fascinating things such as: St
            Stephen's Cathedral, Schönbrunn Palace, The Hofburg, Café Central, a
            classical concert in St Peter's Church, and many more. I got so
            carried away with seeing everything the city had to offer that I
            reached my personal record for number of steps walked in a week
            (156.5k).
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="presenting"
            src="./presenting.jpg"
          />
          <p3>presenting in Vienna</p3>
          <img
            className=" mt-6 object-cover object-center rounded"
            alt="track"
            src="./track.gif"
          />
          <p3>demo of the track pieces</p3>
        </div>
      </div>
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              What I learned
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I learned a great deal during this project. I had only ever
              planned 2 holidays before: a weekend in London and a 3-day trip to
              south Germany. To say I was underprepared for the amount of
              planning it took for a week in the polar circle with 11 students
              on a budget, is a bit of an understatement. Apparently we did a
              fine job because we had no major issues (aside from the 2nd rental
              being in my name and non-transferrable). Another participant and I
              were asked to guide the next year's group in their planning
              because we'd done such a good job.
              <br></br>
              <br></br>I obviously learned a lot from the the Finnish and
              Austrian project participants. I found that you can get to know
              and work with all people, regardless of their culture. The Finnish
              weren't the most warm or approachable and the Austrians could be a
              bit pedantic, but we worked it out. My strongest takeaway was that
              there are few things I find more interesting than exploring other
              cultures and places. The project was the primary inspiration for
              an awesome Balkan road trip later that same year.
              <br></br>
              <br></br>I also learned to appreciate the sheer expandability of
              simple tools like Node-RED. It was introduced to us in an earlier
              semester as a simple tool for quick prototyping, but I got it to
              run a pretty elaborate dashboard. Since then I've used it for some
              more applications, and it almost never fails to support whatever
              random rubbish I throw at it.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-7/8 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <img alt="presenting" src="./developing.jpg" />
              <h4>working on the project in person</h4>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <img alt="presenting" src="./arctic.jpg" />
              <h4>picture taken at the arctic circle border line</h4>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <img alt="presenting" src="./volvo.jpg" />
              <h4>Finnish girl's Volvo I got to drive</h4>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <img alt="presenting" src="./group_picture.jpg" />
              <h4>project group picture</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
