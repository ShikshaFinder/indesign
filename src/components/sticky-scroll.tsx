"use client";
import { ReactLenis } from "lenis/react";
import React, { forwardRef } from "react";

interface StickyScrollProps {
  leftImages?: string[];
  centerImages?: string[];
  rightImages?: string[];
  className?: string;
}

const Component = forwardRef<HTMLElement, StickyScrollProps>(
  ({ leftImages, centerImages, rightImages, className }, ref) => {
    // sensible defaults (keep original unsplash images)

    // Example: Replace with actual image paths from public folder
    const defaultLeft = [
      "/drive-download-20251020T160936Z-1-001/IMG_3630.JPEG",
      "/drive-download-20251020T160936Z-1-001/IMG_3631.JPEG",
      "/drive-download-20251020T160936Z-1-001/IMG_3632.JPEG",
      "/drive-download-20251020T160936Z-1-001/IMG_3634.JPEG",
      "/drive-download-20251020T160936Z-1-001/IMG_3635.JPEG",
    ];

    const defaultCenter = [
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/1.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/2.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/3.jpeg",
    ];

    const defaultRight = [
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/1.jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/2.jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/3(1).jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/4(2).jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/5.jpg",
    ];

    const left = leftImages && leftImages.length ? leftImages : defaultLeft;
    const center =
      centerImages && centerImages.length ? centerImages : defaultCenter;
    const right =
      rightImages && rightImages.length ? rightImages : defaultRight;

    return (
      <ReactLenis root>
        <main className={"bg-black " + (className ?? "")} ref={ref}>
          <div className="wrapper">
            <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

              <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                Transform Your Space with Timeless Design
                <br />
                <span className="text-gray-400">
                  Crafting interiors that inspire and delight 👇
                </span>
              </h1>
            </section>
          </div>

          <section className="text-white   w-full bg-slate-950  ">
            <div className="grid grid-cols-12 gap-2">
              <div className="grid gap-2 col-span-4">
                {left.map((src, idx) => (
                  <figure key={`left-${idx}`} className="w-full">
                    <img
                      src={src}
                      alt=""
                      className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                    />
                  </figure>
                ))}
              </div>

              <div
                className={`sticky top-0 h-screen w-full col-span-4 gap-2 grid`}
              >
                {center.map((src, idx) => (
                  <figure key={`center-${idx}`} className="w-full h-full">
                    <img
                      src={src}
                      alt=""
                      className="transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md "
                    />
                  </figure>
                ))}
              </div>

              <div className="grid gap-2 col-span-4">
                {right.map((src, idx) => (
                  <figure key={`right-${idx}`} className="w-full">
                    <img
                      src={src}
                      alt=""
                      className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <footer className="group bg-slate-950 ">
            <h1 className="text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
              Design 
            </h1>
            <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
          </footer>
        </main>
      </ReactLenis>
    );
  }
);

Component.displayName = "Component";

export default Component;
