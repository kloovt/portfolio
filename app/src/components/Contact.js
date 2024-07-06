// src/components/Contact.js

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex-wrap">
        <div className="lg:w-3/3 mx-auto bg-gray-900 rounded-lg overflow-hidden sm:mr-5 p-5">
          <div className="bg-gray-900 relative flex py-6 rounded shadow-md">
            <div className="lg:w-1/4 px-12">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LOCATION
              </h2>
              <p className="mt-1 text-indigo-400">
                Eindhoven, <br />
                North Brabant, <br />
                the Netherlands
              </p>
            </div>
            <div className="lg:w-1/4 px-12 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <div className="text-indigo-400 leading-relaxed">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:jorritvantriest@gmail.com"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  jorritvantriest@gmail
                </a>
              </div>
            </div>
            <div className="lg:w-1/4 px-12 mt-6 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LINKEDIN
              </h2>
              <div className="text-indigo-400 leading-relaxed">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/jorrit-van-triest-699b43175/"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Jorrit van triest
                </a>
              </div>
            </div>
            <div className="lg:w-1/4 px-12 mt-6 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                PORTFOLIO
              </h2>
              <div className="text-indigo-400 leading-relaxed">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/portfolio"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  jorritvtriest.nl
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
