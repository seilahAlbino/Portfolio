import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-5 right-5">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-2 w-10 h-10 bg-primary text-white rounded-full shadow-md duration-300 ease-in-out hover:opacity-80"
                >
                    <i className="bi bi-arrow-up"></i>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;