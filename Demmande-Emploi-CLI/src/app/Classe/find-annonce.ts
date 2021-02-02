import { from } from 'rxjs';
import {Categories} from './categories';
// tslint:disable-next-line:import-spacing
import {Type} from './type';
import {Sector} from './sector';
// tslint:disable-next-line:import-spacing
import {VilleCl} from './ville-cl';
import { Users } from './user';

export class FindAnnonce {
    id: number;
    nomStage: string;
    descriptionStage: string;
   image: string;
   datePub: Date;
   categories: Categories;
   type: Type;
   sector: Sector;
   ville: VilleCl;
   users: Users;
}
