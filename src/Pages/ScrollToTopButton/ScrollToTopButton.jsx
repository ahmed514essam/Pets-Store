import React, { useEffect, useState } from 'react'
import "./scrool.css"
export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

useEffect(() => {

    const handleScroll = () => {
        const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight / 2;
        setIsVisible(isBottom);
      };

      window.addEventListener('scroll', handleScroll);

      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };





},[])


const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    });
  };

  return (
    <div>
    {isVisible && (
      <button onClick={scrollToTop} className="gfhgfhfh  border-0  ">
   <img  src="/arrow-removebg-preview.png" />
      </button>
    )}
  </div>
  )
}
