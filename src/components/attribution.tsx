import Link from "next/link";

type TProps = {
  name: string;
  link: string;
};

export const Attribution = ({ name, link }: TProps) => {
  return (
    <div className="attribution decoration-none w-content font-light text-slate-300">
      <span>Challenge by </span>
      <Link className="text-white" href={"https://www.frontendmentor.io/"}>
        <span className="font-bold text-slate-300">Frontend Mentor</span>
      </Link>
      <span>
        . Coded by{" "}
        <Link href={link}>
          <span className="font-bold text-slate-300">{name}</span>
        </Link>
        .
      </span>
    </div>
  );
};
