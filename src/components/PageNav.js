import React from 'react';
import './PageNav.css';

const PageNav = ({ currentPage, onNavigate }) => {
  const pages = ['welcome', 'login', 'signup', 'profile'];
  const idx = Math.max(0, pages.indexOf(currentPage));
  const isFirst = idx === 0;
  const isLast = idx === pages.length - 1;

  return (
    <div className="page-nav" aria-hidden>
      <button
        className={`nav-btn home ${isFirst ? 'disabled' : ''}`}
        onClick={() => onNavigate('welcome')}
        aria-label="home"
        title="Home"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 10.5L12 4l9 6.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 21V11h14v10" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        className={`nav-btn prev ${isFirst ? 'disabled' : ''}`}
        onClick={() => !isFirst && onNavigate(pages[idx - 1])}
        aria-label="previous"
        disabled={isFirst}
      >
        ‹
      </button>

      <div className="nav-counter">{`${idx + 1} of ${pages.length}`}</div>

      <button
        className={`nav-btn next ${isLast ? 'disabled' : ''}`}
        onClick={() => !isLast && onNavigate(pages[idx + 1])}
        aria-label="next"
        disabled={isLast}
      >
        ›
      </button>
    </div>
  );
};

export default PageNav;
