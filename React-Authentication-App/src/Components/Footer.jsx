import { BsInstagram } from "react-icons/bs"
import { CiFacebook, CiYoutube } from "react-icons/ci"
import { FaPinterest, FaSquareXTwitter } from "react-icons/fa6"
import { SiPuma, SiVisa } from "react-icons/si"
import { RiMastercardFill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";

export const Footer = () => {
    return (
        <>
            <div className="w-full bg-black text-white border border-amber-800 flex flex-col gap-6">
                {/* Up footer */}
                <div className="w-full pt-12 flex justify-center gap-45 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-1.5 [&>ul>li]:opacity-80">
                            <ul>
                                <h3 className="font-semibold mb-2.5">SUPPORT</h3>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Promotions & Sale</a></li>
                                <li><a href="#">Track Order</a></li>
                                <li><a href="#">Shoe Care</a></li>
                                <li><a href="#">Tech Glossary</a></li>
                                <li><a href="#">Initiate Return / Exchange</a></li>
                                <li><a href="#">Sneakers</a></li>
                                <li><a href="#">Nitro</a></li>
                                <li><a href="#">Hyrox</a></li>
                                <li><a href="#">Cookie Settings</a></li>
                            </ul>

                            <ul className="mt-10">
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Exchange & Return Policy</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">Running Shoes</a></li>
                                <li><a href="#">Sneakers for Women</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>

                            <ul>
                                <h3 className="font-semibold mb-2.5">ABOUT</h3>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">What is HYROX?</a></li>
                                <li><a href="#">PUMA GO WILD</a></li>
                                <li><a href="#">Corporate News</a></li>
                                <li><a href="#">Press Center</a></li>
                                <li><a href="#">Investors</a></li>
                                <li><a href="#">Sustainability</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Store Locator</a></li>
                                <li><a href="#">PUMA Articles</a></li>
                            </ul>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-5">
                                <h3 className="font-semibold mb-2.5">STAY UP TO DATE</h3>
                                <div className="flex justify-between text-2xl gap-5 [&>div]:p-1.5 [&>div]:cursor-pointer [&>div:hover]:rounded-full [&>div:hover]:bg-[#4d4d4d]">
                                    <div>
                                        <CiYoutube />
                                    </div>
                                    <div>
                                        <FaSquareXTwitter />
                                    </div>
                                    <div>
                                        <FaPinterest />
                                    </div>
                                    <div>
                                        <BsInstagram />
                                    </div>
                                    <div>
                                        <CiFacebook />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h3 className="font-semibold">EXPLORE</h3>
                                <div className="flex gap-10 [&>div]:w-16 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:border [&>div]:rounded-md [&>div]:px-2 [&>div]:py-2 [&>div]:cursor-pointer">
                                    <div>
                                        <SiPuma className="text-3xl" />
                                        <p className="text-xs">APP</p>
                                    </div>
                                    <div>
                                        <SiPuma className="text-3xl" />
                                        <p className="text-xs">TRACK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                {/* bottom footer */}
                <div className="w-full px-12">
                    <div className="flex items-center justify-between border-t py-12">
                        <div className="flex gap-3 [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:border [&>div]:bg-white [&>div]:h-6 [&>div]:w-10 [&>div]:px-1.5 ">
                            <div className="border h-fit px-1.5 bg-white text-black">
                                <SiVisa className="text-2xl" />
                            </div>
                            <div>
                                <img src="/images/Mastercard_logo_Orange.webp" alt="Orange MasterCard logo" />
                            </div>
                            <div>
                                <img src="/images/Mastercard_logo_blue.png" alt="BLue MasterCard Logo" className="h-5" />
                            </div>
                            <div>
                                <img src="/images/american_express_logo.png" alt="American Express logo" />
                            </div>
                            <div>
                                <img src="/images/upi_logo.png" alt="UPI logo" />
                            </div>
                            <div>
                                <img src="/images/rupay_logo.png" alt="Rupay logo" />
                            </div>
                        </div>
                        <div className="w-40 border flex items-center justify-center gap-3 py-2">
                            <img src="/images/Indian_flag.svg" alt="Indin Flag" className="h-9 w-9 rounded-full" />
                            <p className="text-xl font-semibold">INDIA</p>
                        </div>
                        <div>
                            <p>© PUMA India Ltd, 2026. All Rights Reserved.</p>
                            <p className="text-right">Imprint and Legal Data</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}