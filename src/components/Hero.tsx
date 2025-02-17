import Image from "next/image";
import Container from "../shared/components/layout/Container";
import me from "@/img/me.jpg";

const Hero = () => {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <div className="flex w-full gap-4 items-center">
          <Image src={me} className="rounded-full w-16 h-16" alt="나" />
          <h1
            className="text-4xl font-bold tracking-tight text-sky-800
                sm:text-5xl dark:text-sky-100"
          >
            <em>Bee</em>
          </h1>
        </div>
        <p className="mt-6 text-base text-sky-600 dark:text-sky-400">
          프론트엔드 개발자로서의 여정을 담아내는 <em>BEE</em>의 블로그입니다.
          <br />
          최신 웹 기술, 프로젝트 이야기, 그리고 개발자로서 성장하기 위한 경험을
          공유합니다.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
