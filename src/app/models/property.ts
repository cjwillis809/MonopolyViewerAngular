export interface Property {
    id: number;
    name: string;
    property_type: string;
    property_value: number;
    color_group: string,
    base_rent: number;
    house_rents: number[];
    hotel_rents: number;
}