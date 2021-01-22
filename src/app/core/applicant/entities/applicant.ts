import { Technology } from '../../technology/entities/technology';

export class Applicant {
  id: number;
  name: string;
  age: number;
  linkedin: string;
  technologies: Technology[];

  constructor(object ?: any) {
    if (object) {
      for (const prop of Object.keys(object)) {
        this[prop] = object[prop];
      }
    }
  }
}
