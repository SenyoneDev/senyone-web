import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const SIZE = window.innerHeight / 3;
    window.addEventListener("scroll", () => {
      setVisible(window.scrollY > SIZE ? true : false);
    });

    return () => {
      window.addEventListener("scroll", () => {
        setVisible(window.scrollY > SIZE ? true : false);
      });
    };
  }, []);

  if (!visible) return;

  return (
    <Link
      href="/#hero"
      scroll={false}
      className="fixed bottom-10 right-5 border-white border-2 rounded-full p-1.5 bg-primary opacity-85 shadow-xl"
    >
      <IoIosArrowUp className="text-white" size={25} />
    </Link>
  );
};

export default BackButton;
