// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            Hello, I'm Jorrit.
            <br className="hidden lg:inline-block" />I'm an IT Student.
          </h1>
          <p className="mb-8 leading-relaxed">
            How nice of you to take an interest in me. I'm happy that I'm interesting enough for you to have a look at my portfolio.
            If you're not looking to waste more time reading my attempts to be funny, the portfolio button is on the navbar at the top of this page.
            <br></br><br></br>
            I'd like to point out that I'm perfectly capable of being serious. I just don't like writing a boilerplate introduction; it feels so disingenuous. I can honestly tell you I'm an enthousiastic and dedicated developer. I love to learn new things and see new places. I want to spend my time on this earth contributing to meaningful projects and learning as much as I can. I'm looking to work for companies that can give me an opportunity to develop my professional skills.
            <br></br><br></br>
            I'm not quite sure what other information you might be interested in, but just in case: I'm right-handed, I have visited every Dutch province, I wear size 45 (EU) shoes, my favourite planet is Saturn, I have a 100% win rate in Smash Bros, I was born 1 week prematurely, I prefer manual transmission to automatics, I wear a silver ring and necklace, my legal first name has 8 syllables, I still have all my wisdom teeth, my car is exactly 208 days older than me, adding the housenumbers I've lived at together makes 110, I'm blood type A+, my first girlfriend later emigrated to Australia, my favourite film is Scott Pilgrim vs. the World, I can read Cyrillic, I have never broken a bone, my most visible scar is from fighting a Slovenian turnstile, I won a gold medal in a skiing competition when I was 6 years old, I've read every book in the Harry Potter Series and didn't enjoy a single one, I can name 32 digits of Pi, I once ranked as top listener of a small Texan band on Spotify, my parents would've named me Rhodee if I was born female, my personal record for number of steps taken in a single week is 156.5k, my favourite Pokémon is Ampharos, I have a trailer license, and I have been hit by a car twice. 
            <br></br><br></br>
            If that's not quite enough information for you, then you can watch my <a target="_blank" rel="noopener noreferrer" href="https://nc.jorritvtriest.nl/s/HEwgDoSPrGDCqPq" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">self-introduction video</a>.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./profile_2048.png"
          />
        </div>
      </div>
    </section>
  );
}