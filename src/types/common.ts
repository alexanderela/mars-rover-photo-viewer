export interface Obj {
    [key: string]: string;
}

export interface FetchRoverProps {
    rover: string;
    options?: Obj;
    page: number;
}