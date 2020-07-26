
import { Tagitem } from './tag-item';

export interface TodoItem {
    title?: string;
    content?: string;
    tags?: Tagitem[];
    dateTime: string;
}
