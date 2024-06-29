// pages/contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Main St, Anytown, USA</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>(123) 456-7890</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@example.com</span>
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Social Links</h2>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-4">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form>
            <div className="flex flex-wrap -mx-4 mb-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="w-full p-4">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;