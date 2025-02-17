import Container from "@/shared/components/layout/Container";
import React from "react";
import me from "@/img/me.jpg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={me}
              alt="image"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            <em>About Me</em>
          </h1>
          <div className="mt-20 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              열정 넘치는 프론트엔드 개발자로서, 혁신적인 웹 기술을 활용하여
              사용자 경험을 극대화하는 것에 집중하며, 최신 프론트엔드 스택을
              마스터하기 위해 끊임없이 학습하는 것을 즐깁니다
            </p>
            <p>
              자바스크립트, React, Next와 같은 최신 기술들을 사용하여, 더
              효율적이며, 더 매력적인 웹 사이트를 구축하는것을 목표로 합니다.
            </p>
            <p>
              또한, 운동은 제 삶의 또 다른 중요한 부분으로, 정신적, 신체적
              건강을 유지하고 스트레스를 관리하고 있습니다. 이는 저의 개발
              작업에도 긍정적인 영향을 미치며, 창의력과 집중력을 향상시키는 데
              도움이 되고 있습니다.
            </p>
            <p>
              자신감 있고, 깔끔하며, 항상 발전을 추구하는 개발자입니다. 매일을
              새로운 배움과 성장의 기회로 삼고 있습니다. 방문해주셔서
              감사합니다. 🙇🏻
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
