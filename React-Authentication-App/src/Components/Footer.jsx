import { BsInstagram } from "react-icons/bs"
import { CiFacebook, CiYoutube } from "react-icons/ci"
import { FaPinterest, FaSquareXTwitter } from "react-icons/fa6"

export const Footer = () => {
    return (
        <>
            <div>
                {/* Up footer */}
                <div>
                    <h3>SUPPORT</h3>
                    <div>
                        <ul>
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
                        <ul>
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
                    </div>
                </div>
                
                <div>
                    <h3>ABOUT</h3>
                    <ul>
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
                </div>

                <div>
                    <h3>STAY UP TO DATE</h3>
                    <div>
                        <CiYoutube />
                        <FaSquareXTwitter />
                        <FaPinterest />
                        <BsInstagram />
                        <CiFacebook />
                    </div>
                </div>

                {/* bottom footer */}
                <div></div>
            </div>
        </>
    )
}