export type InterPropertyInfo = {
  _id: string;
  name: string;
  img: string;
  coverImg: string;
  bio: string;
  description: string;
  location: string;
  price: number;
  propertyInterContent: InterPropertyContent[];
  gallery: [string];
  paymentPlan: string;
};

export type InterPropertyContent = {
  title: string;
  description: string;
  img: string;
};
