import { IoMdMailUnread } from "react-icons/io";
import { Button } from "./Button";

const NewsLetter = () => {
  return (
    <form
      action="mailto:devaaronn@gmail.com"
      className="rounded-2xl border border-sky-200 p-6 dark:border-sky-700/40"
    >
      <h2 className="flex text-sm font-semibold text-sky-900 dark:text-sky-100">
        <IoMdMailUnread className="text-xl" />
        <span className="ml-3">Email</span>
      </h2>
      <p className="mt-2 text-sm text-sky-600 dark:text-sky-400">
        필요한 정보 혹은 대화가 필요하시다면 연락주세요. 😄
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="이메일"
          aria-label="이메일"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border focus:outline-none
           border-sky-900/10 bg-white px-3 py-[clac(theme(spacing.2)-1px)] shadow-md shadow-sky-800/5 placeholder-sky-400 focus:border-sky-500"
        />
        <Button type="submit" className="ml-4 flex-none">
          전송하기
        </Button>
      </div>
    </form>
  );
};

export default NewsLetter;
