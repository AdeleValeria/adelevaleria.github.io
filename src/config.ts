import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
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
    job: "PhD Student",
    started: "2022-08-29",
    stack: "Scratch",
    hobby: "gamble my life savings",
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
