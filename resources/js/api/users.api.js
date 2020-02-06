import httpClient from './httpClient';

export async function fetchUser(){
    const res = await httpClient.get('/api/user');
    return res;
}