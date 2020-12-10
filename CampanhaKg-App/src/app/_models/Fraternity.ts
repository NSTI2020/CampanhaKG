import { Campaign } from './Campaign';

export interface Fraternity {
    id: number;
    name: string;
    campaigns: Campaign[];
    voluntaryId: number;
    addressId: number;
}
