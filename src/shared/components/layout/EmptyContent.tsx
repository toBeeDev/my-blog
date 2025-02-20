const EmptyContent = ({ text = "준비중입니다" }: { text?: string }) => {
  return (
    <div>
      <p className="flex justify-center py-20 text-xl text-gray-400">{text}</p>
    </div>
  );
};

export default EmptyContent;
