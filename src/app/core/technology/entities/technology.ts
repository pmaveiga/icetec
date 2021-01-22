export class Technology {
  id: number;
  name: string;

  constructor(object?: any) {
    if (object) {
      for (const prop of Object.keys(object)) {
        this[prop] = object[prop];
      }
    }
  }
}
