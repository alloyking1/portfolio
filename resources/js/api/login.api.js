import httpClient from './httpClient';

/**
 * @function login
 * @params user:{}
 * @description register the user
 *
 */

export async function login(user_details) {
    const res = await httpClient.post('api/login',  user_details);
    return res;
}