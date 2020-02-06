import httpClient from './httpClient';

export async function loginUser(){
    const res = await httpClient.get('/api/user');
    return res;
}