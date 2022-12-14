import { Status } from '@/shared/enums';

export interface IRole {
    /**
     * ID autoincrement from database.
     */
    readonly id?: number;

    /**
     * Name of Role
     */
    readonly name: string;

    /**
     * Description of Role
     */
    readonly description?: string;

    /**
     * Status of Role ACTIVE | INACTIVE
     */
    readonly status?: Status;
}
