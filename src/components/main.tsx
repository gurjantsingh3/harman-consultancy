/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/5ErfTs6qRGc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact form";
import { JSX, SVGProps } from "react";
import Image from "next/image";

export function Main() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-300   sm:px-1 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center" href="#">
            {/* <BriefcaseIcon className="h-6 w-6 text-white" />
             */}
            <Image
              alt="logo"
              src="/logo.png"
              width={100}
              height={100}
              className="object-contain"
            />
            <span className="ml-2 text-lg font-bold text-black">
              Hire Harmony Solutions{" "}
            </span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="text-black text-lg font-bold hover:text-black focus:text-white"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-black text-lg font-bold hover:text-black focus:text-white"
              href="#"
            >
              Job Board
            </Link>
            <Link
              className="text-black text-lg font-bold hover:text-black focus:text-white"
              href="#"
            >
              Resume Upload
            </Link>
            <Link
              className="text-black text-lg font-bold hover:text-black focus:text-white"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <button
            className="rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:hidden"
            type="button"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl text-center">
                  Welcome to Hire Harmony Solutions
                </h1>
                <p className="mt-8 text-lg text-gray-700 text-center">
                Welcome to Hire Harmony Solutions, your trusted partner in business growth and success. 
    With a wealth of experience and a commitment to excellence, we specialize in providing tailored consulting services to businesses of all sizes. 
    Our dedicated team of experts is here to guide you through every step of your journey, helping you achieve your goals and unlock your full potential.
                </p>
                <div className="mt-12 flex justify-center">
                  <Link
                    className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="Harman Solutions"
                  className="mx-auto rounded-lg"
                  height="400"
                  src="/hr.jpeg"
                  style={{
                    aspectRatio: "500/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Job Board
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Browse our open positions and apply today.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">MARKETING EXECUTIVE</CardTitle>
                  <div>
                    <ul className="text-xs">
                      <li>Minimum 6 months of  relevant work experience</li>
                      <li>Salary: 15000 to 25000</li>
                      <li>Location: Rajpura</li>
                    </ul>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-400">
                      Full-time
                    </div>
                    <Link
                      className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      href="#"
                    >
                      Apply
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">SEO EXECUTIVE</CardTitle>
                  <div>
                  <ul className="text-xs">
                      <li>Minimum 6 months of  relevant work experience</li>
                      <li>Salary: 15000 to 25000</li>
                      <li>Location: Rajpura</li>

                    </ul>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-400">
                      Full-time
                    </div>
                    <Link
                      className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      href="#"
                    >
                      Apply
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">IELTS TRAINER</CardTitle>
                  <div>
                  <ul className="text-xs">
                      <li>Minimum 6 months of relevant work experience</li>
                      <li>Salary: 15000 to 25000</li>
                      <li>Location: Rajpura</li>

                    </ul>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-400">
                      Full-time
                    </div>
                    <Link
                      className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      href="#"
                    >
                      Apply
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Resume Upload
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Submit your resume and job requirements, and our team will review
              your application within 24 hours.
            </p>
            <div className="mt-8">
              <form>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required type="text" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" required type="email" />
                  </div>
                </div>
                <div className="mt-6">
                  <Label htmlFor="resume">Resume</Label>
                  <Input id="resume" required type="file" />
                </div>
                <div className="mt-6">
                  <Label htmlFor="job-requirements">Job Requirements</Label>
                  <Textarea id="job-requirements" required rows={4} />
                </div>
                <div className="mt-6">
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Get in touch with us for more information about our services.
            </p>
            <div className="mt-8">
              <form>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required type="text" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" required type="email" />
                  </div>
                </div>
                <div className="mt-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required rows={4} />
                </div>
                <div className="mt-6">
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section> */}
      </main>
      <ContactForm />
      <footer className="bg-gray-400  sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            {/* <BriefcaseIcon className="h-6 w-6 text-white" /> */}
            <Image
              alt="logo"
              src="/logo.png"
              width={100}
              height={100}
              className="object-contain"
            />
       <span className="ml-2 text-lg font-bold text-black">
  Hire Harmony Solutions{" "}
  <ul className="text-xs font-normal font-sans">
    <li>Director: Ramanjeet Singh, CEO: Mehak</li>
    <li>
      <a href="mailto:hireharmonysolutions@gmail.com" className="text-black hover:underline">
        Email: hireharmonysolutions@gmail.com
      </a>
    </li>
  </ul>
</span>
          </div>
          <div className="hidden md:flex space-x-4 items-center text-black text-sm">
           <p>© 2024 Hire Harmony. All rights reserved.</p>
           {/* <p></p> */}
          </div>
          <div className="hidden space-x-4 md:flex">
            <Link
              className="text-black text-lg font-bold hover:text-black focus:text-white"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-black text-lg font-bold hover:text-black focus:text-white"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-black text-lg font-bold hover:text-black focus:text-white"
              href="#"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
//
function BriefcaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
