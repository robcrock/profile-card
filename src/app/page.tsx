import { Attribution } from "@/components/attribution";
import { ProfileCard } from "@/components/profile-card";
import { data } from "@/data/profile-card-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <ProfileCard header={data.header} content={data.content} />
      <Attribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}
