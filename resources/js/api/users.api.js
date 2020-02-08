import httpClient from './httpClient';

export async function fetchUser(){
    const res = await httpClient.get('/api/user');
    return res;
}

export async function createProfile(profile) {
    const res = await httpClient.post('/api/profile/create', profile);
    return res;
}