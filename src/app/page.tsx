import Image from "next/image";
import bg_pattern_card from "@/../public/images/bg-pattern-card.svg";
import { Attribution } from "@/components/attribution";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* card */}
      <Card className="h-[374px] w-[350px] overflow-hidden">
        {/* card header */}
        <CardHeader className="h-[285px] p-0">
          {/* section */}
          <Image src={bg_pattern_card} alt={"card background image"} />
          <section className="flex flex-col items-center gap-6 pb-10">
            {/* avatar */}
            <Avatar className="-mt-[54px] h-[96px] w-[96px] border-[5px] border-white">
              <AvatarImage src="https://raw.githubusercontent.com/robcrock/profile-card/6530e6589e371a4e00ac9014dcf83f6ad78f0105/public/images/image-victor.jpg" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center gap-2">
              <CardTitle>
                <span>Victor Crest</span> <span>26</span>
              </CardTitle>
              <p>London</p>
            </div>
          </section>
        </CardHeader>
        <Separator />
        {/* card content */}
        <CardContent className="h-[88px] p-0">
          {/* stats list */}
          {/* stat */}
          <section className="flex h-full w-full items-center justify-around gap-[46px]">
            <div className="flex flex-col items-center">
              <div>80K</div>
              <div>Followers</div>
            </div>
            {/* stat */}
            <div className="flex flex-col items-center">
              <div>803K</div>
              <div>Likes</div>
            </div>
            {/* stat */}
            <div className="flex flex-col items-center">
              <div>1.4K</div>
              <div>Photos</div>
            </div>
          </section>
        </CardContent>
      </Card>
      <Attribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}
