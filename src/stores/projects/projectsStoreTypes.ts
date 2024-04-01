import {TId} from "@/types/types.ts";

export interface ProjectInterface {
    _id: TId,
    name: string,
    label?: string,
    owner?: string,
    members?: string[],
    tasks?: string[],
    createdAt?: string,
    updatedAt?:string
}