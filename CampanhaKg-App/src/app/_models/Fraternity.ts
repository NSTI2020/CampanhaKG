import { Campaign } from './Campaign';
import { Voluntary } from './Voluntary';
import { Address } from './Address';

export interface Fraternity {
    id: number;
    name: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    zipcode: string;
    voluntaryId: number;
    voluntary: Voluntary;





}
