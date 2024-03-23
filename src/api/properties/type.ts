export type PropertyInfo = {
  _id: string;
  name: string;
  img: string;
  coverImg: string;
  bio: string;
  description: string;
  location: string;
  price: number;
  propertyType: string;
  propertyContent: PropertyContent[];
  type: typeProperty;
  subType: subTypeProperty;
  gallery: [string];
  bedrooms: number;
  bathrooms: number;
  space: string;
  breifDetails: [
    {
      icon: string;
      title: string;
      value: string;
    }
  ];
  locationDetails: string;
  connectivity: [
    {
      title: string;
      value: string;
    }
  ];
  paymentPlan: string;
  floorPlan: string;
  masterPlan: string;
};

export type PropertyContent = {
  title: string;
  description: string;
  details: [
    {
      title: string;
      icon: string;
    }
  ];
  imgs: [string];
};

export enum typeProperty {
  COMMERCIAL = "commercial",
  RESIDENTIAL = "residential",
}

export enum subTypeProperty {
  OFF_PLAN = "off plan",
  SECONDARY = "secondary projects",
}
