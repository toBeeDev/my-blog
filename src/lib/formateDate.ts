import { parseISO, format } from "date-fns";
import { ko } from "date-fns/locale";

export const formatDate = (dateString: string) => {
  return format(parseISO(dateString), "yyyy년 M월 d일", { locale: ko });
};
