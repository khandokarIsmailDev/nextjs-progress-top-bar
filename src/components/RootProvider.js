"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Link from "next/link";
import { useEffect, useState } from "react";

const RootProvider = ({ children }) => {
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsVertical(true);
    }
  }, []);
  return (
    <>
      {isVertical ? (
        <div className="main_menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about"> About </Link>
            </li>
            <li>
              <Link href="/contact"> Contact </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="main_menu vertical">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about"> About </Link>
            </li>
            <li>
              <Link href="/contact"> Contact </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="layout">
        <button className="layout_change" onClick={() => setIsVertical(!isVertical)}>
          Change Layout
        </button>
      </div>

      {children}
      <ProgressBar color="#fff" />
    </>
  );
};

export default RootProvider;
