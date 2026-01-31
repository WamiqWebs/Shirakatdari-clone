"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactUsForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        // ✅ You can send this data to an API or email service here
        try {
            const response = await fetch("/api/contactus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
        }
        catch (err) {
            console.log("This error occured while sending data to the api: ", err)
        }
        // Reset form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
        });
        toast.success("Form registered successfully!");
    };


    return (
        <>
            <form
                className="h-full w-full flex flex-wrap justify-center items-center py-10 px-5 sm:px-10 md:px-15"
                onSubmit={handleSubmit}
            >
                {/* First Name */}
                <div className="w-full lg:w-[400px] m-1 text-black bg-white flex flex-col">
                    <label className="font-semibold mb-3">
                        First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        className="pl-2 pb-2 border-b border-gray-400"
                        placeholder="Enter Your First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                {/* Last Name */}
                <div className="w-full lg:w-[400px] m-1 text-black bg-white flex flex-col">
                    <label className="font-semibold mb-3">
                        Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        className="pl-2 pb-2 border-b border-gray-400"
                        placeholder="Enter Your Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div className="w-full lg:w-[400px] m-1 text-black bg-white flex flex-col">
                    <label className="font-semibold mb-3">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        type="email"
                        className="pl-2 pb-2 border-b border-gray-400"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Phone Number */}
                <div className="w-full lg:w-[400px] m-1 text-black bg-white flex flex-col">
                    <label className="font-semibold mb-3">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        className="pl-2 pb-2 border-b border-gray-400"
                        placeholder="Enter Your Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                {/* Subject Radio Buttons */}
                <div className="w-full lg:w-[400px] m-1 text-black bg-white flex flex-col">
                    <label className="font-semibold mb-3">
                        Select Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-evenly items-center flex-wrap">
                        <label>
                            <input
                                type="radio"
                                name="subject"
                                value="General Inquiry"
                                checked={formData.subject === "General Inquiry"}
                                onChange={handleChange}
                                className="mr-2"
                                required
                            />
                            General Inquiry
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="subject"
                                value="Consultation"
                                checked={formData.subject === "Consultation"}
                                onChange={handleChange}
                                className="mr-2"
                                required
                            />
                            Consultation
                        </label>
                    </div>
                </div>

                {/* Message */}
                <div className="w-full lg:w-[400px] m-1 text-black bg-white flex flex-col">
                    <label className="font-semibold mb-3">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        required
                        className="pl-2 pb-2 border-b border-gray-400"
                        placeholder="Write Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={2}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full flex justify-center mt-5">
                    <button
                        type="submit"
                        className="px-3 py-2 bg-[#162b18] text-white rounded hover:bg-[#00FF0D]"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </>
    );
}