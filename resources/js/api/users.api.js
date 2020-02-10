import httpClient from './httpClient';

export async function fetchUser(){
    const res = await httpClient.get('/api/user');
    return res;
}

export async function createProfile(profile) {
    const res = await httpClient.post('/api/profile/create', profile);
    return res;
}

export async function getProfile(id) {
    const res = await httpClient.get('/api/profile/get/'+id);
    return res;
}

export async function deleteProfile(postId){
    const res = httpClient.delete('/api/profile/delete/'+postId);
    return res;
}