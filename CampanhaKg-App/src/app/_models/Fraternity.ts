import { Campaign } from './Campaign';
import { Address } from './Address';
import { User } from './User';

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
    userId: number;
    user: User;





}
