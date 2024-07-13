import { CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { generateInitials } from "@/lib/utils";
import type { TProfileCardData } from "@/types/profile-card-data";

export const ProfileCardHeader = ({
  imageUrl,
  name,
  age,
  location,
}: TProfileCardData["header"]) => {
  return (
    <CardHeader className="h-[145px] p-0">
      <section className="flex flex-col items-center gap-6 pb-10">
        <Avatar className="-mt-[54px] h-[96px] w-[96px] border-[5px] border-white">
          <AvatarImage src={imageUrl} alt="profile image" />
          <AvatarFallback>{generateInitials(name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center gap-2">
          <CardTitle>
            <span className="text-body font-bold">{name}</span>{" "}
            <span className="text-body font-normal text-dark-grayish-blue">
              {age}
            </span>
          </CardTitle>
          <p className="text-sm text-dark-grayish-blue">{location}</p>
        </div>
      </section>
    </CardHeader>
  );
};
