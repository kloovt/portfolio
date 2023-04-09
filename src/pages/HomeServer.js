import React from "react";
import Navbar from "../components/Navbar";

export default function HomeServer() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            Home server
          </h1>
          <p className="mb-8 py-10 leading-relaxed">
            During my internship at Prodrive Technologies I sat across from a
            fellow intern who happened to be a wizard at infrastructure and
            server management. He motivated me to get myself a server, so I
            bought an old office PC and installed Ubuntu on it.
            <br></br>
            <br></br> I managed to get an instance of Nextcloud running, but I
            couldn't easily access it externally. After months of fighting my
            housemate to get access to the right ports on the router I gave up
            and went for a Cloudflare tunnel instead.
            <br></br>
            <br></br>
            After that the successes came thick and fast. I quickly got deeper
            into it and startup setting up all kinds of services with Docker
            (Portainer, Node-RED, a minecraft server, deluge, emulator, grafana,
            jellyfin, influxDB, and more). At one point I decided to challenge
            myself a little and set up a Keycloak SAML client and integrate it
            with Cloudflare. My experienced colleague was genuinely impressed
            I'd managed to get it working on my own.
            <br></br>
            <br></br>I can scarcely believe I've only been using it for around 3
            months because it's now something I use basically every day. I watch
            fully legal media on Jellyfin, I use it for file hosting, for game
            hosting, for data collection, for development, and more. I'm
            currently typing this into VS Code with a remote connection to my
            server via SSH. This portfolio page is most likely hosted on the
            server too.
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
              In putting together my server I gained a much deeper appreciation
              for how the internet actually works. After learning about routing
              without retaining any of it at least thrice I finally understand
              it. I now have personal experience with local routing, port
              mapping, DNS servers, domain hosting, Cloudflare, SAML, and other
              relevant subjects.
              <br></br>
              <br></br>
              More directly I now have enough know-how to set up any
              sufficiently simple service in a matter of minutes, which only 5
              months ago would have seemed fantastical to me. I will continue to
              expand my usage of my server and discover more uses for it. It has
              quickly become a hobby of mine. I was recently offered a couple of
              mildly broken office PCs for free and I'm planning to set them up
              as a cluster for cloud computing, just because I think it'll be
              fun
            </p>
          </div>
          <div className="flex flex-wrap lg:w-7/8 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-2/2 w-full">
              <img alt="portainer" src="./portainer.jpg" />
              <h4>screenshot of portainer</h4>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-7/8 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-2/2 w-full">
              <img alt="grafana" src="./grafana.png" />
              <h4>screenshot of grafana hardware monitoring dashboard</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
