import {
  Github,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Printer,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="flex justify-center items-center">
          <a
            href="https://www.instagram.com/btw_its_nitixh/"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com/Nitishkumar_147"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/in/nitish-kumar-183754218/"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <Linkedin strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com/Nitish-Kumar-2"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <Github />
          </a>
          <a
            href="https://youtube.com/@webTech771"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <Youtube size={30} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <img src="/images/logo.png" className="mb-4 m-auto md:m-0" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              maxime velit unde ipsam rem quas est tempore, ex exercitationem
              beatae doloribus quidem dolorem pariatur delectus eum alias
              accusamus officia? Distinctio.
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              FrameWorks
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                tailwind
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                javascript
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                axios
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Pricing
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Settings
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Help
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <Home className="mr-2"/>
              Abohar,Punjab,India
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <Mail className="mr-2"/>
              nitishsuthar07@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <Phone className="mr-2"/>+ 01 234 567 88
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Printer className="mr-2"/>+ 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright: </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="!#"
        >
          Suthar Store
        </a>
      </div>
    </footer>
  );
};

export default Footer;
