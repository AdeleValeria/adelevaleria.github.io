import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    school: string;
    field: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Adele Valeria",
    job: "Computational Biology PhD Student",
    school: "Johns Hopkins University",
    field: "computational immuno-oncology",
    projectLink: "https://github.com/JohnDoe?tab=repositories",
  },
  socials: {
    twitter: "https://twitter.com/JohnDoe",
    github: "https://github.com/JohnDoe",
  },
  projects: {
    "996.ICU": {
      url: "https://github.com/996icu/996.ICU",
      tags: ["ccp", "chinese", "overwork", "labor", "996"],
    },
    Linux: {
      url: "https://github.com/torvalds/linux",
      tags: ["c", "kernel", "unix", "os"],
    },
  },
  og: {
    image: icon.src,
  },
};
