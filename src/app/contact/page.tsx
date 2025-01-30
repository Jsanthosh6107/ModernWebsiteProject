import EmailForm from "@/components/Forms/EmailForm";
import { ContactIcon } from "@/components/svgs"; // Ensure the SVG is vectorized and clean

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-16 lg:p-24 font-[family-name:var(--font-geist-sans)]">
      {/* Main container with vertical alignment */}
      <div className="flex flex-col items-center sm:items-start gap-16">
        
        {/* Heading Section */}
        <div className="w-full text-center sm:text-left">
          <h1 className="text-3xl font-semibold text-gray-800">
            Get in Touch with Us
          </h1>
          <p className="text-lg text-center sm:text-left text-gray-600 max-w-lg mt-4">
            We're here to assist you. Whether you have a question, want to start a project, or need support, feel free to reach out!
          </p>
        </div>

        {/* Row: SVG Icon and Email Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center w-full">
          {/* Left: SVG Icon */}
          <div className="flex justify-center sm:justify-start">
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg flex justify-center items-center">
              <ContactIcon/>
            </div>
          </div>

          {/* Right: Email Form */}
          <div className="w-full max-w-md">
            <EmailForm />
          </div>
        </div>

        {/* Optional Footer / Contact Details */}
        <div className="mt-12 text-center sm:text-left text-gray-500">
          <p className="text-sm">Or reach us via phone: (123) 456-7890</p>
          <p className="text-sm">Email us at: support@example.com</p>
        </div>
      </div>
    </div>
  );
}
