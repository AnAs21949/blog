import {FaFacebookF,  FaPinterestP, FaTwitter} from 'react-icons/fa'
import "./footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className="first-half">
            <h2>Come for the blog, stay for the comments.</h2>
            <p>Welcome to  blogg - Your Daily Haven of Insight and Exploration. From Fashion to Science, Parenthood to Philosophy, we're your guide to an enriched life. We believe in embracing complexity and celebrating authenticity. As you journey through our articles, remember: 'Simplicity is the ultimate sophistication.' Thank you for being a part of our world. Dive Deeper Today!</p>
        </div>
        <div className="second-half">
            <div className="part1">
                <p>Brighten up your inbox</p>
                <input type="text" placeholder="Enter your email" />
                <div className="social">
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaPinterestP/>
                </div>
            </div>
            <div className="part2">
                <ul>
                    <li>style</li>
                    <li>travel</li>
                    <li>about</li>
                </ul>
                <ul>
                    <li>food</li>
                    <li>relationships</li>
                    <li>faq & privacy</li>
                </ul>
                <ul>
                    <li>design</li>
                    <li>Motherhood</li>
                </ul>
            </div>
            <div className="part3">
                <p>Explore, engage, and enlighten yourself through our diverse collection of articles. Join us on a journey of knowledge and inspiration, one click at a time. © My blog 2023</p>
            </div>
        </div>
    </div>
  )
}
