import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollableSection() {
  const container = useRef(null);
  const scroll = useRef(null);
  const items = [
    "https://images.pexels.com/photos/4309369/pexels-photo-4309369.jpeg",
    "https://images.pexels.com/photos/4309368/pexels-photo-4309368.jpeg",
    "https://images.pexels.com/photos/4309369/pexels-photo-4309369.jpeg",
  ];

  useEffect(() => {
    gsap.to(container.current, {
      translateX: `${(items.length - 1) * -100}%`,
      marginLeft: `${-(items.length - 1) * 24}px`,
      scrollTrigger: {
        pin: scroll.current,
        anticipatePin: 1,
        start: "center center",
        end: "+=150%",
        trigger: scroll.current,
        scrub: 2,
      },
    });
  }, [items]);

  return (
    <div className="scroll" ref={scroll}>
      <div className="scroll__wrap">
        <div className="scroll__wrap__outer">
          <h3 className="scroll__title">
            REACT
            <br />
            +
            <br />
            GSAP
          </h3>
          <div className="scroll__wrap__inner">
            <div className="scroll__wrap__inner__items" ref={container}>
              {items.map((item, index) => {
                return (
                  <img
                    className="scroll__wrap__inner__items__item"
                    key={index}
                    src={item}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
