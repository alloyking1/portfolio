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

export async function getEditProfile(postId){
    const res = httpClient.post('/api/profile/edit/get/'+postId);
} 

export async function editProfile(profileId, profile){
    const res = httpClient.post('/api/profile/edit'+profileId, profile);
} 