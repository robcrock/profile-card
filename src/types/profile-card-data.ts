type TProfileCardHeaderData = {
  imageUrl: string;
  name: string;
  age: number;
  location: string;
};

type TProfileCardContentData = {
  followers: string;
  likes: string;
  photos: string;
};

export type TProfileCardData = {
  header: TProfileCardHeaderData;
  content: TProfileCardContentData;
};
