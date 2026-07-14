import { useEffect, useState } from "react";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScroll(progress);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <div className="progress-container">

      <div
        className="progress-bar-top"
        style={{ width: `${scroll}%` }}
      ></div>

    </div>

  );

}

export default ScrollProgress;