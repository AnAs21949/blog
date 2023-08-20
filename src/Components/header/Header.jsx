import { useState } from 'react'
import './header.css'


export default function Header() {
    const [active, setActive] = useState(false)
    const showDropdown = () =>{
        setActive(prev => !prev)
    }
  return (
    <header>
        <div className="content">
            <div className="desktop-nav">
                <div className="first-header-list">
                    <li className="style-menu">
                        <a href="#">Style</a>
                        <ul className='sub-cat'>
                        <li>Beauty</li>
                        <li>DO OR DON'T</li>
                        <li>HAIR TUTORIALS</li>
                        <li>BEAUTY UNIFORMS</li>
                        <li>FASHION</li>
                        <li>WEEK OF OUTFITS</li>
                        </ul>
                    </li>
                    <li className="design-menu">
                        <a href="#">Design</a>
                        <ul className='sub-cat'>
                            <li>Favorite Books</li>
                            <li>Gift Guides</li>
                            <li>Movies & TV</li>
                            <li>Weekend Link Lists</li>
                        </ul>
                    </li>
                    <li className="food-menu">
                        <a href="">food</a>
                        <ul className='sub-cat'>
                            <li>Best Recipes</li>
                            <li>Drinks</li>
                            <li>Entertaining Ideas</li>
                            <li>Quick Dinners</li>
                        </ul>
                    </li>
                    <li className="Relationship-menu">
                        <a href="#">Relationship</a>
                        <ul className='sub-cat'>
                            <li>Career</li>
                            <li>Dating Tips</li>
                            <li>Weddings</li>
                            <li>What We're Reading</li>
                        </ul>
                    </li>
                </div>
                <a className='logo'> Blog</a>
                <div className="second-header-list">
                    <li className="travel-menu">
                        <a href="#">Travel</a>
                        <ul className='sub-cat'>
                            <li>Airplane Survival</li>
                            <li>City Guides</li>
                            <li>Family Vacations</li>
                            <li>Packing Tips</li>
                        </ul>
                    </li>
                    <li className="motherhood-menu">
                        <a href="">Motherhood</a>
                        <ul className='sub-cat'>
                            <li>Motherhood Around the World</li>
                            <li>Motherhood Mondays</li>
                            <li>Pregnancy</li>
                            <li>Surprising Parenting Advice</li>
                            <li>Talking to Kids</li>
                        </ul>
                    </li>
                    <li className="about-menu">
                        <a href="#">About</a>
                        <ul className='sub-cat'>
                            <li>Our Story</li>
                            <li>The Team</li>
                            <li>Book Recs</li>
                            <li>Press</li>
                            <li>Contact</li>
                        </ul>
                    </li>
                </div>
            </div>
            <div className="mobile-nav">
                <ul>
                    <li className='nav-trigger' >
                        <button onClick={showDropdown} className='toggle' style={{display:`${active ? 'none' : 'block'}`}}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <button onClick={showDropdown} className='cancel' style={{display:`${active ? 'block' : 'none'}`}}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </li>
                    <li>
                        <a href="#">Blogg</a>
                    </li>
                    <li>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                </ul>
            </div>
        </div>

        <div className={`nav-dropdown ${active? "show": ""}`}>
            <ul className='sub-list'>
                <li className="style-menu">
                        <a href="#">Style</a>
                        <ul className='sub-cat'>
                        <li>Beauty</li>
                        <li>DO OR DON'T</li>
                        <li>HAIR TUTORIALS</li>
                        <li>BEAUTY UNIFORMS</li>
                        <li>FASHION</li>
                        <li>WEEK OF OUTFITS</li>
                        </ul>
                </li>
                <li className="design-menu">
                        <a href="#">Design</a>
                        <ul className='sub-cat'>
                            <li>Favorite Books</li>
                            <li>Gift Guides</li>
                            <li>Movies & TV</li>
                            <li>Weekend Link Lists</li>
                        </ul>
                </li>
                <li className="food-menu">
                        <a href="">food</a>
                        <ul className='sub-cat'>
                            <li>Best Recipes</li>
                            <li>Drinks</li>
                            <li>Entertaining Ideas</li>
                            <li>Quick Dinners</li>
                        </ul>
                </li>
                <li className="Relationship-menu">
                        <a href="#">Relationship</a>
                        <ul className='sub-cat'>
                            <li>Career</li>
                            <li>Dating Tips</li>
                            <li>Weddings</li>
                            <li>What We're Reading</li>
                        </ul>
                </li>
                <li className="travel-menu">
                        <a href="#">Travel</a>
                        <ul className='sub-cat'>
                            <li>Airplane Survival</li>
                            <li>City Guides</li>
                            <li>Family Vacations</li>
                            <li>Packing Tips</li>
                        </ul>
                </li>
                <li className="motherhood-menu">
                        <a href="">Motherhood</a>
                        <ul className='sub-cat'>
                            <li>Motherhood Around the World</li>
                            <li>Motherhood Mondays</li>
                            <li>Pregnancy</li>
                            <li>Surprising Parenting Advice</li>
                            <li>Talking to Kids</li>
                        </ul>
                </li>
                <li className="about-menu">
                        <a href="#">About</a>
                        <ul className='sub-cat'>
                            <li>Our Story</li>
                            <li>The Team</li>
                            <li>Book Recs</li>
                            <li>Press</li>
                            <li>Contact</li>
                        </ul>
                </li>
            </ul>
        </div>
    </header>
  )
}
