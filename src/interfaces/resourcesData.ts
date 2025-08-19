export interface IResourcesData {
  en: ILanguageDetails;
  es: ILanguageDetails;
}

interface ILanguageDetails {
  presentation: IPresentationData;
  aboutMe: IAboutMeData;
  workHistory: IWorkHistoryData;
}

export interface IPresentationData {
  title: string;
  description: string;
  extraText: string;
}

export interface IAboutMeData {
  aboutText: string;
  education: {
    title: string;
    academicHistory: IAcademicData[];
  };
  languages: {
    title: string;
    languageSkills: ILanguagesData[];
  };
}

interface IAcademicData {
  school: string;
  years: string;
  degree: string;
}

interface ILanguagesData {
  name: string;
  level: string;
}

export interface IWorkHistoryData {
  skills: {
    title: string;
    skillsData: string[];
  };
  jobHistory: {
    title: string;
    jobData: IProfessionalData[];
  };
}

interface IProfessionalData {
  company: string;
  position: string;
  years: string;
  description: string;
  skills: string[];
}
