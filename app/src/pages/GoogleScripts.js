import React from "react";
import Navbar from "../components/Navbar";

export default function GoogleScripts() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            Google Scripts
          </h1>
          <p className="mb-8 py-10 leading-relaxed">
            This is the least recent of my portfolio projects, but I think it's
            worth mentioning. In late 2020 I started journaling. It started out
            on a weekly basis, but over time it became a rather elaborate system
            of small daily reports, larger weekly assessments, even larger
            monthly assessments, and smaller but more introspective seasonal
            retrospectives.
            <br></br>
            <br></br>
            It became a bit of a hassle to copy the right template and give it
            the right name every single day and even more on sundays (which is
            when I do the larger assessments). To make it all a little easier I
            decided to learn how to automate it. You can find the Google Drive
            files, including the script, in{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nc.jorritvtriest.nl/s/9jbej8zcRHDwYfW"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              this folder
            </a>. I had a go at making it all work with Google scripts and to
            my utter surprise it all worked just as intended.
            <br></br>
            <br></br>I wrote the scripts in late 2021 and they haven't failed me
            yet. It's admittedly a bit funny about the week number in the first
            weeks of January, but apart from that I have had 0 issues The only
            changes I have made have been additions for new report types. I
            haven't expanded it to copy and name the seasonal reviews yet
            because they're relatively new. Every three months I copy it
            manually and think to myself 'I should automate that one of these
            days'; it hasn't reached the annoyance threshold.
            <br></br>
            <br></br>If I were to redesign the infrastructure of my system from
            the ground up (it's somewhere very low on the behemoth list of
            potential projects I keep somewhere in the back of my mind) I would
            probably not use Google Drive in the first place. I imagine a
            self-hosted equivalent would give me more control. I would probably
            find a storage location that allows for secure but simple cloud
            backup. I would want a file type that's either easy to edit on
            mobile, or easily integrated with a mobile interface (asciidoc). I
            would then figure out a way to automate the creation of these in a
            way that's nice and maintainable. Admittedly I would do it this way
            at first, but then ask a particularly talented classmate what they'd
            do because I probably missed plenty of opportunities for simplicity.
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
              There are 3 main reasons I included this project in my portfolio
              <br></br>
              1. This is the first big coding project I ever did that had
              nothing to do with school. I didn't need to use Google
              Drive/Scripts for any school assignments, it's just what I found
              convenient at the time. The journaling system is for structured
              self-assesment, not for school. This project marked the beginning
              of me programming for myself as a hobby.
              <br></br>
              2. This system has held up. I still passively use it every day
              because it works well. I think that if I hadn't figured this out I
              might have been quicker to give up on using Google Drive, or just
              the journaling system in general. I'm impressed with how
              maintainable it is. I added the most recent section (effort report
              generation) last January and it took me no time at all to
              integrate it in the weekly generation process.
              <br></br>
              3. I'm blatantly advertising that I use a comprehensive system of
              journaling. I don't do it to impress anyone, but I think that for
              the right recruiter it will improve my chances.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-7/8 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-2/2 w-full">
              <img alt="executions" src="./executions.jpg" />
              <h4>executions in the past 7 days</h4>
            </div>
            <div className="p-2 sm:w-2/2 w-full">
              <img alt="script" src="./script.gif" />
              <h4>scrolling through the script</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
