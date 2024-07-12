import Image from "next/image";
import bg_pattern_top from "@/../public/images/bg-pattern-top.svg";
import bg_pattern_bottom from "@/../public/images/bg-pattern-bottom.svg";
import { Attribution } from "@/components/attribution";
import { ProfileCard } from "@/components/profile-card";
import { data } from "@/data/profile-card-data";

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
      <ProfileCard header={data.header} content={data.content} />
      <Attribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}
