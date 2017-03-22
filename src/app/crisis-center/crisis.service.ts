import {Injectable} from "@angular/core";
export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great '),
  new Crisis(3, 'Giant Asteroid Heading '),
  new Crisis(4, 'Procrastinators Meeting'),
];

let crisesPromise = Promise.resolve(CRISES);

@Injectable()
export class CrisisService {
  getCrises() { return crisesPromise; }

  getCrisis(id: number | string) {
    return crisesPromise
      .then(crises => crises.find(crisis => crisis.id === +id));
  }
}
