export const ProfileStat = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-body font-bold">{value}</div>
      <div className="text-dark-grayish-blue text-[10px] capitalize tracking-[1.5px]">
        {label}
      </div>
    </div>
  );
};
