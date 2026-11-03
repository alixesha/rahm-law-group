import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
MapPin,
Phone,
ArrowRight,
Clock,
Mail,
User,
Send,
CheckCircle2,
MessageSquare,
} from "lucide-react";
import { FIRM } from "@/data/firm";

export const Route = createFileRoute("/contact")({
component: ContactPage,
});

function ContactPage() {
const [status, setStatus] = useState<
"idle" | "sending" | "success" | "error"

> ("idle");



async function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();

const form = event.currentTarget;  
setStatus("sending");  

const formData = new FormData(form);  
formData.set("form-name", "contact");  

const body = new URLSearchParams();  

formData.forEach((value, key) => {  
  body.append(key, String(value));  
});  

try {  
  const response = await fetch("/contact-form.html", {  
    method: "POST",  
    headers: {  
      "Content-Type": "application/x-www-form-urlencoded",  
    },  
    body: body.toString(),  
  });  

  if (!response.ok) {  
    throw new Error(`Submission failed: ${response.status}`);  
  }  

  form.reset();  
  setStatus("success");  
} catch (error) {  
  console.error("Contact form error:", error);  
  setStatus("error");  
}

}

return (
<main>
{/* Hero Section */}
<section className="bg-[#101a2b] px-5 py-20 text-white md:py-28">
<div className="mx-auto max-w-6xl">
<p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d9b66d]">
Get in Touch
</p>

<h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl md:text-6xl">  
        Contact Our Firm.  
      </h1>  

      <p className="mt-6 max-w-2xl leading-8 text-white/75">  
        Contact Rahm Law Group, APC to discuss your legal concerns  
        and learn about possible next steps. Our team is here to listen.  
      </p>  
    </div>  
  </section>  

  {/* Main Contact Section */}  
  <section className="bg-[#f8f6f1] px-5 py-16 md:py-24">  
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">  

      {/* Firm Information */}  
      <div className="bg-white p-7 shadow-sm sm:p-10">  
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">  
          Firm Information  
        </p>  

        <h2 className="mt-4 font-display text-3xl font-bold text-[#101a2b]">  
          We're Here to Listen.  
        </h2>  

        <p className="mt-4 leading-7 text-gray-600">  
          Please contact our office to discuss your situation.  
          Our team will be happy to guide you through the initial  
          inquiry process.  
        </p>  

        <div className="mt-8 space-y-7">  

          {/* Phone */}  
          <div className="flex items-start gap-4">  
            <div className="flex size-12 shrink-0 items-center justify-center bg-[#101a2b] text-[#d9b66d]">  
              <Phone size={22} />  
            </div>  

            <div>  
              <h3 className="font-bold text-[#101a2b]">  
                Call Our Office  
              </h3>  

              <a  
                href={FIRM.phoneHref}  
                className="mt-2 inline-block text-lg font-semibold text-[#997126] hover:underline"  
              >  
                {FIRM.phoneDisplay}  
              </a>  
            </div>  
          </div>  

          {/* Address */}  
          <div className="flex items-start gap-4">  
            <div className="flex size-12 shrink-0 items-center justify-center bg-[#101a2b] text-[#d9b66d]">  
              <MapPin size={22} />  
            </div>  

            <div>  
              <h3 className="font-bold text-[#101a2b]">  
                Office Address  
              </h3>  

              <p className="mt-2 leading-7 text-gray-600">  
                {FIRM.addressLine1}  
                <br />  
                {FIRM.addressLine2}  
              </p>  

              <a  
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FIRM.addressQuery)}`}  
                target="_blank"  
                rel="noreferrer"  
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#997126] hover:underline"  
              >  
                Get Directions <ArrowRight size={15} />  
              </a>  
            </div>  
          </div>  

          {/* Consultations */}  
          <div className="flex items-start gap-4">  
            <div className="flex size-12 shrink-0 items-center justify-center bg-[#101a2b] text-[#d9b66d]">  
              <Clock size={22} />  
            </div>  

            <div>  
              <h3 className="font-bold text-[#101a2b]">  
                Consultations  
              </h3>  

              <p className="mt-2 text-sm leading-7 text-gray-600">  
                Call our office or submit the contact form.  
                Our team will follow up regarding your inquiry  
                and discuss the next steps.  
              </p>  
            </div>  
          </div>  

        </div>  
      </div>  

      {/* Contact Form */}  
      <div className="bg-white p-7 shadow-sm sm:p-10">  
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">  
          Send an Inquiry  
        </p>  

        <h2 className="mt-4 font-display text-3xl font-bold text-[#101a2b]">  
          How Can We Help You?  
        </h2>  

        <p className="mt-4 leading-7 text-gray-600">  
          Complete the form below and a member of our legal team  
          will get in touch with you as soon as possible.  
        </p>  

        {status === "success" ? (  
          <div  
            role="status"  
            className="mt-8 border border-green-200 bg-green-50 p-7"  
          >  
            <CheckCircle2  
              className="text-green-700"  
              size={42}  
            />  

            <h3 className="mt-4 text-xl font-bold text-[#101a2b]">  
              Thank You for Contacting Us!  
            </h3>  

            <p className="mt-3 leading-7 text-gray-700">  
              Your message has been successfully submitted.  
              An attorney or member of our legal team will review  
              your inquiry and contact you as soon as possible.  
            </p>  

            <p className="mt-4 text-sm text-gray-600">  
              We appreciate your interest in Rahm Law Group, APC.  
            </p>  

            <button  
              type="button"  
              onClick={() => setStatus("idle")}  
              className="mt-6 font-bold text-[#997126] hover:underline"  
            >  
              Submit Another Inquiry  
            </button>  
          </div>  
        ) : (  
          <form  
            name="contact"  
            method="POST"  
            action="/contact-form.html"  
            data-netlify="true"  
            netlify-honeypot="bot-field"  
            onSubmit={handleSubmit}  
            className="mt-8 space-y-5"  
          >  
            <input  
              type="hidden"  
              name="form-name"  
              value="contact"  
            />  

            <div className="hidden">  
              <label>  
                Do not fill this out:  
                <input  
                  name="bot-field"  
                  tabIndex={-1}  
                />  
              </label>  
            </div>  

            {/* Full Name */}  
            <div>  
              <label className="mb-2 block text-sm font-semibold text-[#101a2b]">  
                Full Name *  
              </label>  

              <div className="relative">  
                <User  
                  size={18}  
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"  
                />  

                <input  
                  type="text"  
                  name="fullName"  
                  required  
                  maxLength={100}  
                  autoComplete="name"  
                  placeholder="Enter your full name"  
                  className="w-full border border-gray-200 bg-[#fafafa] py-3.5 pl-11 pr-4 text-sm text-[#101a2b] outline-none transition focus:border-[#b18b48]"  
                />  
              </div>  
            </div>  

            {/* Client Email */}  
            <div>  
              <label className="mb-2 block text-sm font-semibold text-[#101a2b]">  
                Email Address *  
              </label>  

              <div className="relative">  
                <Mail  
                  size={18}  
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"  
                />  

                <input  
                  type="email"  
                  name="email"  
                  required  
                  maxLength={254}  
                  autoComplete="email"  
                  placeholder="your@email.com"  
                  className="w-full border border-gray-200 bg-[#fafafa] py-3.5 pl-11 pr-4 text-sm text-[#101a2b] outline-none transition focus:border-[#b18b48]"  
                />  
              </div>  
            </div>  

            {/* Phone */}  
            <div>  
              <label className="mb-2 block text-sm font-semibold text-[#101a2b]">  
                Phone Number *  
              </label>  

              <div className="relative">  
                <Phone  
                  size={18}  
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"  
                />  

                <input  
                  type="tel"  
                  name="phone"  
                  required  
                  maxLength={30}  
                  autoComplete="tel"  
                  placeholder="Enter your phone number"  
                  className="w-full border border-gray-200 bg-[#fafafa] py-3.5 pl-11 pr-4 text-sm text-[#101a2b] outline-none transition focus:border-[#b18b48]"  
                />  
              </div>  
            </div>  

            {/* Legal Matter */}  
            <div>  
              <label className="mb-2 block text-sm font-semibold text-[#101a2b]">  
                Type of Legal Matter *  
              </label>  

              <select  
                name="legalMatter"  
                required  
                defaultValue=""  
                className="w-full border border-gray-200 bg-[#fafafa] px-4 py-3.5 text-sm text-[#101a2b] outline-none transition focus:border-[#b18b48]"  
              >  
                <option value="" disabled>  
                  Select a legal matter  
                </option>  

                <option value="Personal Injury">  
                  Personal Injury  
                </option>  
                <option value="Car Accident">  
                  Car Accident  
                </option>  
                <option value="Dog Bite">  
                  Dog Bite  
                </option>  
                <option value="Brain Injury">  
                  Brain Injury  
                </option>  
                <option value="Construction Accident">  
                  Construction Accident  
                </option>  
                <option value="Premises Liability">  
                  Premises Liability  
                </option>  
                <option value="Truck Accident">  
                  Truck Accident  
                </option>  
                <option value="Wrongful Death">  
                  Wrongful Death  
                </option>  
                <option value="Criminal Law">  
                  Criminal Law  
                </option>  
                <option value="DUI / DWI">  
                  DUI / DWI  
                </option>  
                <option value="Employment Law">  
                  Employment Law  
                </option>  
                <option value="Other">  
                  Other  
                </option>  
              </select>  
            </div>  

            {/* Message */}  
            <div>  
              <label className="mb-2 block text-sm font-semibold text-[#101a2b]">  
                How Can We Help? *  
              </label>  

              <div className="relative">  
                <MessageSquare  
                  size={18}  
                  className="absolute left-4 top-4 text-gray-400"  
                />  

                <textarea  
                  name="message"  
                  required  
                  minLength={10}  
                  maxLength={3000}  
                  rows={5}  
                  placeholder="Briefly describe how we may assist you..."  
                  className="w-full resize-y border border-gray-200 bg-[#fafafa] py-3.5 pl-11 pr-4 text-sm text-[#101a2b] outline-none transition focus:border-[#b18b48]"  
                />  
              </div>  
            </div>  

            <p className="text-xs leading-6 text-gray-500">  
              Please do not include confidential, sensitive, or  
              time-critical information. Submitting this form does  
              not establish an attorney-client relationship.  
            </p>  

            {/* Error Message */}  
            {status === "error" && (  
              <p  
                role="alert"  
                className="border border-red-200 bg-red-50 p-4 text-sm text-red-700"  
              >  
                We could not submit your message. Please try again  
                or contact our office directly by phone.  
              </p>  
            )}  

            {/* Submit Button */}  
            <button  
              type="submit"  
              disabled={status === "sending"}  
              className="flex w-full items-center justify-center gap-3 bg-[#101a2b] px-6 py-4 font-bold text-white transition hover:bg-[#997126] disabled:cursor-not-allowed disabled:opacity-60"  
            >  
              {status === "sending" ? (  
                "Submitting Your Inquiry..."  
              ) : (  
                <>  
                  Submit Your Inquiry  
                  <Send size={18} />  
                </>  
              )}  
            </button>  
          </form>  
        )}  
      </div>  
    </div>  

    {/* Bottom CTA */}  
    <div className="mx-auto mt-10 max-w-6xl bg-[#101a2b] p-7 text-white sm:p-10">  
      <h2 className="font-display text-2xl font-bold">  
        Take the Next Step.  
      </h2>  

      <p className="mt-3 leading-7 text-white/70">  
        Every legal matter is different. Contact our office to discuss  
        your concerns and learn about possible next steps.  
      </p>  

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">  
        <a  
          href={FIRM.phoneHref}  
          className="flex items-center justify-center gap-3 bg-[#d9b66d] px-6 py-4 font-bold text-[#101a2b] transition hover:bg-white"  
        >  
          <Phone size={18} />  
          Call {FIRM.phoneDisplay}  
        </a>  

        <Link  
          to="/practice-areas/"  
          className="flex items-center justify-center gap-2 border border-white/30 px-6 py-4 font-semibold transition hover:border-[#d9b66d] hover:text-[#d9b66d]"  
        >  
          Explore Practice Areas  
          <ArrowRight size={17} />  
        </Link>  
      </div>  
    </div>  
  </section>  
</main>

);
}
