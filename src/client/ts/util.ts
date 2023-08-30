import axios from 'axios';

export function readURLQuery(query: string) : {[param: string]: string}{
    const regex = /([\w]+)=([\w-]+)/g;
    const arr = query.match(regex).map(x => x.split('='));
    return Object.fromEntries(arr);
}