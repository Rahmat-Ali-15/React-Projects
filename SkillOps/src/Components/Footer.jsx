import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


export const Footer = () => {
    return(
        <>
            <div className="p-10 flex flex-col items-center gap-10 bg-black text-white">
                <div className="pb-8 grid grid-cols-4 gap-12 border-b-2 border-white/30 [&>div>h3]:font-bold [&>div>h3]:text-[18px] [&>div>h3]:pb-4 [&>div>ul>li]:pb-2 [&>div>ul>li]:text-[15px]">
                    <div>
                        <h3>SkillOps Institute</h3>
                        <p className="text-[15px]">Leading IT training institute in India offering industry-recognized certifications with 100% placement assistance.</p>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Courses</li>
                            <li>Placement</li>
                            <li>Trainers</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Our Courses</h3>
                        <ul>
                            <li>CCNA Training</li>
                            <li>Linux Administration</li>
                            <li>AWS Cloud</li>
                            <li>Azure Cloud</li>
                            <li>DevOps Engineering</li>
                            <li>Infrastructure Services</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <ul className="flex flex-col gap-2 [&>li]:flex [&>li]:gap-5 [&>li>p]:text-[14px]">
                            <li>
                                <IoLocation className="text-3xl" />
                                <p>123, Andheri East, Mumbai, Maharashtra 400069</p>
                            </li>
                            <li>
                                <FaPhone className="text-xl" />
                                <p>+91 9262986281</p>
                            </li>
                            <li>
                                <MdMessage className="text-xl" />
                                <p>info@techedinstitute.in</p>
                            </li>
                        </ul>
                        <div className="flex flex-col gap-3 pt-5">
                            <h3 className="font-bold">Follow Us</h3>
                            <div className="flex gap-6 [&>div]:border [&>div]:p-1 [&>div]:rounded-full">
                                <div>
                                    <CiFacebook className="text-[15px]" />
                                </div>
                                <div>
                                    <FaTwitter />
                                </div>
                                <div>
                                    <FaLinkedin />
                                </div>
                                <div>
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>© 2026 SkillOps Institute. All rights reserved. | Designed for job-oriented IT education in India.</p>
                </div>
            </div>
        </>
    )
}