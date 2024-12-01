/*eslint-disable*/
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Landing: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth >= 800);
  const [list, setList] = useState<string[]>([]);
  const [isFooter, setIsFooter] = useState<boolean>(false);

  const img1 = useRef<HTMLImageElement>(null);
  const img2 = useRef<HTMLImageElement>(null);
  const img3 = useRef<HTMLImageElement>(null);
  const img4 = useRef<HTMLImageElement>(null);
  const footer = useRef<HTMLDivElement>(null);

  const targetListMap = new Map<HTMLElement | null, string[]>([
    [img1.current, ["/// NEW"]],
    [img2.current, ["COATS | TRENCH COATS"]],
    [img3.current, ["SKIN"]],
    [img4.current, ["BAGS | BACKPACKS"]],
    [footer.current, ["JOIN OUR NEWSLETTER"]],
  ]);

  const handleResize = (): void => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    if (!isMobile) {
      setList(["WOMEN", "MEN", "KIDS"]);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement | null;

          if (target === footer.current) {
            if (entry.isIntersecting) {
              setIsFooter(true);
              setList([""]);
            } else {
              setIsFooter(false);
            }
          } else {
            if (entry.isIntersecting) {
              const newList = targetListMap.get(target);
              if (newList) {
                setList(newList);
              }
            }
          }
        });
      },
      { threshold: 0.9 }
    );

    const elements = [img1, img2, img3, img4, footer];

    elements.forEach((e) => {
      if (e.current) {
        observer.observe(e.current);
      }
    });

    return () => {
      elements.forEach((e) => {
        if (e.current) {
          observer.unobserve(e.current);
        }
      });
    };
  }, [isMobile]);

  const navigate = useNavigate();

  const navigateToSignUp = (): void => {
    navigate("/signup");
  };
  const navigateToSignIn = (): void => {
    navigate("/login");
  };

  return (
    <div className="landing">
      <img
        ref={img1}
        className="first-image"
        src={
          isMobile
            ? "https://static.zara.net/assets/public/739f/9f9f/b33041de8de2/581ecc3655c4/image-portrait-ipad-default-aa2e2c66-20f9-45a1-9fba-15ec66f060d9-default_0/image-portrait-ipad-default-aa2e2c66-20f9-45a1-9fba-15ec66f060d9-default_0.jpg?ts=1732787717456&w=968"
            : "https://static.zara.net/assets/public/c7e2/ae86/6515432caa1d/d1d1cfb31aa8/image-landscape-default-f4d896ca-cee7-43b0-a1cd-d839648d4151-default_0/image-landscape-default-f4d896ca-cee7-43b0-a1cd-d839648d4151-default_0.jpg?ts=1732787711761&w=1115"
        }
        alt="img"
      />
      <div className="header">
        <div className="overlay"></div>
        <div className={isFooter ? "title onFooter" : "title"}>
          <div className="sidebar-button">
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <img
            src={
              isFooter
                ? "https://static.zara.net/photos///contents/cm/assets/logos/default-light_0.svg?ts=1690441518876"
                : "https://static.zara.net/photos///contents/cm/assets/logos/default-dark_0.svg?ts=1690441478954"
            }
            // src="https://static.zara.net/photos///contents/cm/assets/logos/default-dark_0.svg?ts=1690441478954"
            alt="zara"
            className="logo"
          />
        </div>

        <div className="menu-right">
          <div
            className={isFooter ? "button-wrapper onFooter" : "button-wrapper"}
          >
            <button onClick={navigateToSignUp}>LOG IN</button>
            <button onClick={navigateToSignIn}>HELP</button>
            <button>CART (0)</button>
          </div>

          <div className="search">SEARCH</div>
        </div>

        <ul>
          {list.map((item, index) => {
            return (
              <li key={index} className="list-item">
                {item}
              </li>
            );
          })}
        </ul>

        <div className="search-mobile">SEARCH</div>
      </div>

      <img
        ref={img2}
        className="second-image"
        src="https://static.zara.net/assets/public/0298/6c51/cb174d43bbe9/c5e842f3632d/image-portrait-ipad-default-3ae67f6c-7faf-401f-ac54-037fbfa35dbb-default_0/image-portrait-ipad-default-3ae67f6c-7faf-401f-ac54-037fbfa35dbb-default_0.jpg?ts=1732788528895&w=959"
        alt="gabardinas"
      />
      <img
        ref={img3}
        src="https://static.zara.net/assets/public/0a90/29f5/769d4b56937e/b431e75c6eb7/image-portrait-ipad-default-a9ebe4bd-2f94-46f1-af6e-12da8c0b8b98-default_0/image-portrait-ipad-default-a9ebe4bd-2f94-46f1-af6e-12da8c0b8b98-default_0.jpg?ts=1732788757915&w=950"
        alt=""
        className="third-image"
      />

      <img
        ref={img4}
        className="fourth-image"
        src="https://static.zara.net/assets/public/142a/d95e/89ce46389463/cdcf9511b223/image-portrait-ipad-default-8d1c0716-46ae-4d57-ba3b-d0636f03240c-default_0/image-portrait-ipad-default-8d1c0716-46ae-4d57-ba3b-d0636f03240c-default_0.jpg?ts=1732789444145&w=625"
        alt="bags"
      />

      <div ref={footer} className="footer">
        JOIN OUR NEWSLETTER
      </div>
    </div>
  );
};

export default Landing;
