const TimelineItem = ({
  index,
  title,
  message,
  isEven,
  transactionHash,
}: {
  index: number;
  title: string;
  message: string;
  isEven: boolean;
  transactionHash: string;
}) => {
  const openExternalLink = () => {
    window.open(
      `https://mumbai.polygonscan.com/tx/${transactionHash}`,
      "_blank"
    );
  };

  const commonStyles = "order-1 w-5/12 ";

  return isEven ? (
    <div
      className={`mb-8 flex justify-between items-center w-full right-timeline dark:bg-[#222]`}
      onClick={openExternalLink}
    >
      <div className={`hidden sm:flex ${commonStyles}`} />
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">
          {index + 1}
        </h1>
      </div>
      <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
          {message}
        </p>
      </div>
    </div>
  ) : (
    <div
      className={`mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline dark:bg-[#222]`}
      onClick={openExternalLink}
    >
      <div className={`hidden sm:flex ${commonStyles}`} />
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">
          {index + 1}
        </h1>
      </div>
      <div className="order-1 bg-[#333] rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
          {message}
        </p>
      </div>
    </div>
  );
};

type TimelineItem = {
  title: string;
  message: string;
  transactionHash: string;
};

const Timeline = ({ timelineData }: { timelineData: TimelineItem[] }) => {
  return (
    <div className="container bg-[#222] mx-auto w-full h-full rounded-lg">
      <div className="relative wrap overflow-hidden p-10 h-full">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            index={index}
            title={item.title}
            message={item.message}
            transactionHash={item.transactionHash}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
