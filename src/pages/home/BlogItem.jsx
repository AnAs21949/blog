import  { useEffect, useRef } from 'react';

function BlogItem({ isVisible, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry)
          isVisible(true);
        }
      });
    });
    console.log(isVisible)

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  return (
    <div className={`blog-item ${isVisible ? 'show' : 'hidden'}`} ref={ref}>
      {children}
    </div>
  );
}

export default BlogItem;
