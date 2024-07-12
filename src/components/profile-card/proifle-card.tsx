import Image from "next/image";
import bg_pattern_card from "@/../public/images/bg-pattern-card.svg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProfileCardHeader } from "@/components/profile-card/profile-card-header";
import { ProfileCardContent } from "@/components/profile-card/profile-card-content";
import type { TProfileCardData } from "@/types/profile-card-data";

export const ProfileCard = ({ header, content }: TProfileCardData) => {
  return (
    <Card className="flex h-[374px] w-[350px] flex-col items-center overflow-hidden border-none shadow-[0px_50px_100px_-20px_#08465E50]">
      <Image src={bg_pattern_card} alt={"card background image"} />
      <ProfileCardHeader
        imageUrl={header?.imageUrl}
        name={header?.name}
        age={header?.age}
        location={header?.location}
      />
      <Separator />
      <ProfileCardContent
        followers={content?.followers}
        likes={content?.likes}
        photos={content?.photos}
      />
    </Card>
  );
};
