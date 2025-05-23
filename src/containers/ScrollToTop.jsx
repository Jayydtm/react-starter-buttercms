import React, { useState, useEffect } from "react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show or hide the back-top-top button
      setIsVisible(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50);
    };

    window.document.addEventListener('scroll', onScroll, { passive: true });
    
    return () => window.document.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <a 
      href="#" 
      className="scroll-top btn-hover" 
      style={{display: isVisible ? "flex" : "none"}}
      onClick={scrollToTop}
    >
      <i className="lni lni-chevron-up"></i>
    </a>
  )
}

export default ScrollToTop;

