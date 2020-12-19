import { Campaign } from './Campaign';
import { Voluntary } from './Voluntary';
import { Address } from './Address';

export interface Fraternity {
    id: number;
    name: string;
    campaigns: Campaign[];
    voluntaryId: number;
    voluntary: Voluntary;
    address: Address;
    addressId: number;
}
