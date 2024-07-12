import Image from "next/image";
import bg_pattern_card from "@/../public/images/bg-pattern-card.svg";
import bg_pattern_top from "@/../public/images/bg-pattern-top.svg";
import bg_pattern_bottom from "@/../public/images/bg-pattern-bottom.svg";
import { Attribution } from "@/components/attribution";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <Image
        className="absolute -left-[244px] -top-[488px]"
        src={bg_pattern_top}
        alt={"background circle top"}
      />
      <Image
        className="absolute -bottom-[488px] -right-[244px]"
        src={bg_pattern_bottom}
        alt={"background circle bottom"}
      />
      <ProfileCard />
      <Attribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}

const headerData = {
  imageUrl:
    "https://raw.githubusercontent.com/robcrock/profile-card/6530e6589e371a4e00ac9014dcf83f6ad78f0105/public/images/image-victor.jpg",
  name: "Victor Crest",
  age: 26,
  location: "London",
};

const profileStats = {
  followers: "80k",
  likes: "803k",
  photos: "1.4k",
};

const ProfileCard = () => {
  return (
    <Card className="flex h-[374px] w-[350px] flex-col items-center overflow-hidden border-none shadow-[0px_50px_100px_-20px_#08465E50]">
      <Image src={bg_pattern_card} alt={"card background image"} />
      <ProfileHeader data={headerData} />
      <Separator />
      <ProfileStats data={profileStats} />
    </Card>
  );
};

const generateInitials = (name: string) => {
  const nameArr = name.split(" ");
  const firstInitial = nameArr[0][0];
  const lastInitial = nameArr[1][0];
  const initials = `${firstInitial} ${lastInitial}`;
  return initials;
};

const ProfileHeader = ({ data }: { data: typeof headerData }) => {
  return (
    <CardHeader className="h-[145px] p-0">
      <section className="flex flex-col items-center gap-6 pb-10">
        <Avatar className="-mt-[54px] h-[96px] w-[96px] border-[5px] border-white">
          <AvatarImage src={data.imageUrl} />
          <AvatarFallback>{generateInitials(data.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center gap-2">
          <CardTitle>
            <span className="text-body font-bold">{data.name}</span>{" "}
            <span className="text-body text-dark-grayish-blue font-normal">
              {data.age}
            </span>
          </CardTitle>
          <p className="text-dark-grayish-blue text-sm">{data.location}</p>
        </div>
      </section>
    </CardHeader>
  );
};

const ProfileStats = ({ data }: { data: typeof profileStats }) => {
  return (
    <CardContent className="flex h-[88px] w-full items-center justify-center gap-[46px] p-0">
      {Object.entries(data).map(([key, value], index) => {
        return <ProfileStat key={index} label={key} value={value} />;
      })}
    </CardContent>
  );
};

const ProfileStat = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-body font-bold">{value}</div>
      <div className="text-dark-grayish-blue text-[10px] capitalize tracking-[1.5px]">
        {label}
      </div>
    </div>
  );
};
