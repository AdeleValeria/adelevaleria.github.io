import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    school: string;
    bachelor: string;
    school2: string;
    field: string;
    advisor: string;
    hobby1: string;
    hobby2: string;
    hobby3: string;
    dream: string;
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
    bachelor: "Biomedical Informatics",
    school2: "Zhejiang University-University of Edinburgh Institute",
    field: "computational immuno-oncology",
    advisor: "Dr. Rachel Karchin",
    hobby1: "crocheting",
    hobby2: "cooking",
    hobby3: "teaching",
    dream: "academic",
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
