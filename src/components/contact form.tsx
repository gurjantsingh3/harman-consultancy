"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { sendEmail } from "@/app/utils/sendEmail";
import { toast } from "./ui/use-toast";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    jobRequirements: "",
    resume: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    console.log(file, "file");

    setFormData({ ...formData, resume: file });
    // store in file folder with file name as resume
  };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //     // Check if any field is empty
  // const isEmptyField = Object.values(formData).some((value) => value === "");

  // if (isEmptyField) {
  //   alert("Please fill in all the fields.");
  //   return;
  // }
  // if (!formData.resume) {
  //   alert("Please add resume");
  //   return;
  // }

  //   try {
  //     console.log(formData);
  //     const response = await fetch("/api/Sendmail", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       setSubmitted(true);
  //       setTimeout(() => {
  //         window.location.reload(); // Refresh the page after 2 seconds
  //       }, 2000);
  //     } else {
  //       console.error("Failed to send email");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  //
  const handleSubmit = async () => {
    const postData = new FormData();
    postData.append("fullName", formData.fullName);
    postData.append("email", formData.email);
    postData.append("phoneNumber", formData.phoneNumber);
    postData.append("jobRequirements", formData.jobRequirements);
    postData.append("resume", formData.resume!);

    console.log(postData.getAll("fullName"));
    const isEmptyField = Object.values(formData).some(
      (value) => value === "" || value == null
    );
    if (isEmptyField) {
      toast({
        description: "Please fill in all the fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await sendEmail(postData);
      if ((res.message = "Email sent")) {
        toast({
          description: "Form Submitted Successfully",
          variant: "default",
        });
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          jobRequirements: "",
          resume: null,
        });
        setLoading(false);
      } else {
        alert("Email Not sent");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div
      id="contact"
      className="relative w-full h-screen bg-cover bg-center z-10"
      style={{
        backgroundImage: "url(/bg.webp)",
      }}
    >
      <div className="absolute inset-0 bg-gray-700 bg-opacity-50" />
      <div className="absolute inset-0 flex items-center  justify-center p-4 ">
        <Card className="w-full max-w-4xl bg-white bg-opacity-90 p-6 shadow-lg shadow-gray-900/5 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Job Consultancy Form
            </CardTitle>
            <CardDescription className="text-sm text-center">
              Submit your resume and job requirements, and our team will review
              your application within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Job Requirements</Label>{" "}
              <Input
                id="jobRequirements"
                type="text"
                value={formData.jobRequirements}
                onChange={handleChange}
                placeholder="Enter your job requirements"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Upload Resume</Label>
              <Input
                id="resume"
                type="file"
                onChange={handleFileChange}
                accept=".pdf , .doc , .docx"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
            {submitted && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-green-500 text-white rounded-full p-4">
                  {/* Add checkmark or any success icon here */}✓
                  <span className="ml-2">Form submitted successfully!</span>
                </div>
              </div>
            )}{" "}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
