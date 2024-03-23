export type InterPropertyInfo = {
  _id: string;
  name: string;
  img: string;
  coverImg: string;
  bio: string;
  description: string;
  location: string;
  price: number;
  type: typeProperty;
  subType: subTypeProperty;
  propertyInterContent: InterPropertyContent[];
  gallery: [string];
  paymentPlan: string;
};

export type InterPropertyContent = {
  title: string;
  description: string;
  img: string;
};

export enum typeProperty {
  COMMERCIAL = "commercial",
  RESIDENTIAL = "residential",
}

export enum subTypeProperty {
  OFF_PLAN = "off plan",
  SECONDARY = "secondary projects",
}
