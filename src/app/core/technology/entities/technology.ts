export class Technology {
  id = null;
  name = '';

  constructor(object?: any) {
    if (object) {
      for (const prop of Object.keys(object)) {
        // @ts-ignore
        this[prop] = object[prop];
      }
    }
  }
}
