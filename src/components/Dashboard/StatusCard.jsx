const StatusCard = ({ title, value, icon }) => {
  return (
    <div className="p-4 rounded-lg flex flex-col items-start w-48">
      <div className="flex gap-3 items-center">
        <p className="text-gray-500 text-sm">{title}</p>
        <div>{icon}</div>
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export default StatusCard;
