"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="my-12 md:my-12 py-24 px-4 md:px-0 relative flex flex-col items-center md:items-start"
    >
  <div className="bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-10 transform -translate-y-1/2"></div>
      <div className="z-10 flex flex-col justify-center max-w-xl md:ml-20 text-center md:text-left">
        <h5 className="text-xl md:text-2xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m always happy to connect about new opportunities,
          collaborations, or just a friendly hello. Reach out through any of
          the channels below.
        </p>
        <div className="mb-4 text-sm text-[#ADB7BE] space-y-1">
          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            <a
              href="mailto:himashachinthani@gmail.com"
              className="hover:text-white underline underline-offset-4"
            >
              himashachinthani@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">GitHub:</span>{" "}
            <a
              href="https://github.com/HimashaChinthani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-4"
            >
              github.com/HimashaChinthani
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/himasha-chinthani-882076293/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-4"
            >
              Himasha Chinthani
            </a>
          </p>
        </div>
        <div className="socials flex flex-row items-center gap-4">
          <Link
            href="mailto:himashachinthani23@gmail.com"
            aria-label="Email"
            className="hover:scale-110 transition-transform"
          >
            <Image src="/email-icon.svg" alt="Email Icon" width={28} height={28} />
          </Link>
          <Link
            href="https://github.com/HimashaChinthani"
            aria-label="Github"
            className="hover:scale-110 transition-transform"
          >
            <Image src="/github-icon.svg" alt="Github Icon" width={28} height={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/himasha-chinthani-882076293/"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={28} height={28} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;