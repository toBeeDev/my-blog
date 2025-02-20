import { Button } from "@/shared/components/common/Button";
import Container from "@/shared/components/layout/Container";

const NotFound = () => {
  return (
    <Container className="flex items-center justify-center py-32 sm:pt-32">
      <div className="flex flex-col items-center gap-5">
        <p className="text-base font-semibold text-sky-400 dark:text-sky-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-sky-800 sm:text-5xl">
          페이지를 찾지 못했습니다.
        </h1>
        <p className="mt-4 text-base text-sky-600 dark:text-sky-400">
          죄송합니다. 원하시는 페이지를 찾지 못하였습니다.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          홈으로 돌아가기
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
