import React from "react";
import { assets } from "../../assets/assets";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-600 h-auto flex flex-col items-center bg-[url('../src/assets/logo.png')] bg-no-repeat  bg-center">
      <div className="flex flex-row  justify-between w-4/5 py-9">
        <div>
          <div>
            <div className="text-green-600 grid mt-4 mb-1 font-medium text-2xl">
              About us
            </div>
            <p className="text-white inline-grid font-mono text-sm">
              Cleaning Nature unites communities
              <br /> to protect and restore natural
              <br />
              spaces. Join us in making our
              <br /> planet cleaner and greener.
            </p>
          </div>
          <div>
            <div className="text-green-600 grid  mt-4 mb-1 font-medium text-2xl">
              contact us
            </div>
            <div className="flex gap-2 font-mono text-sm">
              <div className="text-white mt-1">
                <FaMobileScreenButton />
              </div>
              <p className="text-white">+91-7078738138</p>
            </div>
            <div className="flex gap-2 font-mono text-sm">
              <div className="text-white mt-1">
                <MdEmail />
              </div>
              <p className="text-white">harshthakur0047@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-green-600 grid  mt-4 mb-1 font-medium text-2xl">
            Information
          </div>
          <ul className="font-normal text-white cursor-pointer ">
            <li className="mb-1 hover:underline">About us</li>
            <li className="mb-1 hover:underline">Testimonials</li>
            <li className="mb-1 hover:underline">Blog</li>
            <li className="hover:underline">Events</li>
          </ul>
        </div>
        <div>
          <div className="text-green-600 grid  mt-4 mb-1 font-medium text-2xl">
            Helpful links
          </div>
          <ul className="font-normal text-white cursor-pointer ">
            <li className="mb-1 hover:underline">Services</li>
            <li className="mb-1 hover:underline">Support</li>
            <li className="mb-1 hover:underline">Terms & Conditions</li>
            <li className="mb-1 hover:underline">Privacy Policy</li>
          </ul>
        </div>

        <div className=" mt-14">
          <p className="text-white font-medium mb-4">Subscribe more info</p>
          <div className="grid">
            <input
              className="p-1 rounded-md text-sm border-none outline-none"
              type="text"
              placeholder="enter your email"
            />
            <button className="mt-4 bg-green-600 text-white font-medium py-0.5 px-1 border-none w-24 outline-none rounded-lg cursor-pointer">
              Subscribe
            </button>
          </div>
          <ul className="flex mt-9 gap-7 text-white cursor-pointer">
            <li>
              <FaFacebook />
            </li>
            <li>
              <TfiGoogle />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-4/5  text-center" />

      <div className="flex flex-row my-3 py-2 items-center justify-between gap-5">
        <p className="text-white font-normal text-sm">
          Copyright 2024. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
