import Image from 'next/image';
import React from 'react';

export default function TechnologiesSection() {
  return (
    <section id="TechnologiesSection" className="py-[44px] w-full">
      <h2 className="mt-2 text-sm md:text-md lg:text-[24px] font-bold text-center">
        FERRAMENTAS E <span className="text-primary">TECNOLOGIAS</span>.
      </h2>
      <p className="mt-2 text-sm md:text-md lg:text-[16px] text-center">
        Algumas tecnologias e ferramentas com as quais trabalho e tenho maiores afinidades
      </p>

      <div className="flex flex-wrap flex-col justify-center gap-4 mt-4">
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {Array.from({ length: 12 }).map((_, index) => {
          const size = index + 1 > 19 ? 76 : 34;
          const delay = (index + 1) * 100;

          return (
            <Image
              key={index}
              src={`/technologies/${index + 1}.png`}
              alt={`Tecnologia ${index}`}
              width={size}
              height={40}
              placeholder="blur"
              blurDataURL={`/technologies/${index}.png`}
              className={`animate-bounce`}
              style={{ animationDelay: `${delay}ms`, animationDuration: "2s" }}
            />
          );
        })}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {Array.from({ length: 20 }).map((_, index) => {
            if(index < 12) return (<></>)
            const size = index + 1 > 19 ? 76 : 34;
            const delay = (index + 1) * 100;

            return (
              <Image
                key={index}
                src={`/technologies/${index + 1}.png`}
                alt={`Tecnologia ${index}`}
                width={size}
                height={40}
                placeholder="blur"
                blurDataURL={`/technologies/${index}.png`}
                className={`animate-bounce`}
                style={{ animationDelay: `${delay}ms`, animationDuration: "2s" }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
