import React from "react";
import Navbar from "../components/Navbar";

export default function QRCode() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            QR-code graduation assignment
          </h1>
          <p className="mb-8 py-10 leading-relaxed">
            During my final semester I did my graduation assignment at Canon Production Printing in Venlo. I can't describe
            the exact details of my work without breaking confidentiality, but I will try to describe it in general terms.
            There is an ink vessel that delivers ink and other consumables to the printers. These vessels feature an RFID-tag
            that contains some metadata pertaining to the content of the vessel and its properties. The tag is secured for
            authentication.
            <br></br>
            <br></br> 
            The next generation of printer uses a different ink vessel and said vessel uses a QR-code instead of an RFID-tag.
            It was my task to design the QR-code solution, which mostly consisted of defining the structure of the data
            inside the QR-code and designing the generation process of the QR-code in the production environment. The scope
            of the QR-code was broader than just the new ink vessel. The code had to cover an undefined number of use-cases
            and remain both forward- and backwards- compatible. After involving a large number of people that represented
            different interested parties, I came up with the idea to make the content specification an open standard. The
            QR-codes have a minimal amount of universal data, and the rest is dependent on standards defined in the
            specification.
            <br></br>
            <br></br> 
            The generation process was a relatively straightforward software solution. My solution had to receive product
            information from the production line, format it according to the specification, securely add the data security
            feature, and return a valid QR-code. The biggest challenge was that the open standard required me to account for
            input data in a more abstract format. The software also had to be maintainable and updateable for different
            standards. The software was written in C++ and executed in an embedded Linux environment. I am proud to say that
            the solution I designed was perfectly sufficient for Canon's purposes and it will be deployed on a large scale.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="bottles"
            src="./bottles.jpg"
          />
          <p3>Current Ink Bottles</p3>
        </div>
      </div>
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              What I learned
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I think my takeaways from this assingment are more professional than technical. I had to work with a large
              number of stakeholders that all had input for my solution. I also had to figure out the exact scope on my own.
              Learning to build something that is not only functional, but also maintainable and even expandable is a very
              useful skill.
              <br></br>
              <br></br>
              I really liked Canon's way of working. I had a very strong sense of ownership over my assignment and I have no
              doubt the solution would have looked very different if someone else had designed it. Another thing I learned is
              that I don't want a 45-minute commute. I love driving my car, but I much prefer cycling as a daily commute.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-7/8 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-2/2 w-full">
              <img alt="canon" src="./canon.png" />
              <h4>I made myself a nameplate/mousemat</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
