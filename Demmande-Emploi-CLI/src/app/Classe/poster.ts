import { Data } from '@angular/router';
import { from } from 'rxjs';

import {Annonce} from './annonce';
export class Poster {
    id: number;
    Message: string;
    cv: string;
    // tslint:disable-next-line:variable-name
    num_Tile: string;
    email: string;
    // tslint:disable-next-line:variable-name
    date_Poster: Date;
    annonce: Annonce;
    // tslint:disable-next-line:variable-name
    id_Ann: number;
    // tslint:disable-next-line:variable-name
    user_Email: string;
}
