import { CardContent } from "@/components/ui/card";
import { ProfileStat } from "@/components/profile-card/profile-stat";
import type { TProfileCardData } from "@/types/profile-card-data";

export const ProfileCardContent = (props: TProfileCardData["content"]) => {
  return (
    <CardContent className="flex h-[88px] w-full items-center justify-center gap-[46px] p-0">
      {Object.entries(props).map(([key, value], index) => {
        return <ProfileStat key={index} label={key} value={value} />;
      })}
    </CardContent>
  );
};
