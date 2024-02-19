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
