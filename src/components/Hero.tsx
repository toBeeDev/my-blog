import Container from "./Container";

const Hero = () => {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1
          className="text-4xl font-bold tracking-tight text-sky-800
                sm:text-5xl dark:text-sky-100"
        >
          <em>Frontend Fusion</em>
        </h1>
        <p className="mt-6 text-base text-sky-600 dark:text-sky-400">
          프론트엔드 개발자로서의 여정을 담아내는 개인 블로그입니다. 최신 웹
          기술, 프로젝트 이야기, 그리고 개발자로서 성장하기 위한 경험을
          공유합니다.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
