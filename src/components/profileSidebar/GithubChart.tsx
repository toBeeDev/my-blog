"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubChart = ({ githubId }: { githubId: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const lightTheme = {
    light: ["#ffffff", "#d6e3f8", "#92b4f4", "#4f85e3", "#1f57c3"],
  };

  const darkTheme = {
    dark: ["#f0f0f0", "#d1d1d1", "#a0a0a0", "#606060", "#000000"],
  };

  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 180); // 오늘 기준 90일 전으로 설정
  return (
    <>
      {isMounted && (
        <GitHubCalendar
          username={githubId}
          showWeekdayLabels
          theme={theme === "light" ? darkTheme : lightTheme}
          transformData={(data) =>
            data.filter((day) => new Date(day.date) > cutoffDate)
          }
        />
      )}
    </>
  );
};

export default GithubChart;
