import { Technology } from '../../technology/entities/technology';

export class Applicant {
  id = null;
  name = '';
  age = null;
  linkedin = '';
  technologies: Technology[] = [];

  constructor(object ?: any) {
    if (object) {
      for (const prop of Object.keys(object)) {
        this[prop] = object[prop];
      }
    }
  }
}
