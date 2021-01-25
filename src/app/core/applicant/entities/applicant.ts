import { Technology } from '../../technology/entities/technology';

export class Applicant {
  id: number;
  name: string;
  age: number;
  linkedin: string;
  technologies: Technology[];

  constructor(object ?: any) {
    if (object) {
      if (object.hasOwnProperty('technologies') && object.technologies) {
        this.technologies = object.technologies.data.map((obj: any) => new Technology(obj));
        delete object.technologies;
      }

      for (const prop of Object.keys(object)) {
        // @ts-ignore
        this[prop] = object[prop];
      }
    }
  }
}
