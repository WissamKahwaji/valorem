const CONTACT_US = {
  GET: "/contact",
};

const ABOUT_US = {
  GET: "/about-us",
};

const OUR_TEAMS = {
  GET: "/our-team",
};

const OUR_AGENTS = {
  GET: "/our-agents",
};

const OUR_SERVICES = {
  GET: "/services",
};

const STATISTICS = {
  GET: "/statistics",
};

const PROPERTY = {
  GET: {
    All: "/property",
    BY_ID: (id: string | undefined) => `/property/${id}`,
    Last: "/property/last-properties",
    Min: "/property/min-price-properties",
  },
};

const INTERPROPERTY = {
  GET: {
    All: "/propertyInter",
    BY_ID: (id: string | undefined) => `/propertyInter/${id}`,
  },
};

const API_ROUTES = {
  CONTACT_US,
  ABOUT_US,
  OUT_TEAMS: OUR_TEAMS,
  OUR_AGENTS,
  OUR_SERVICES,
  STATISTICS,
  PROPERTY,
  INTERPROPERTY,
};
export default API_ROUTES;
