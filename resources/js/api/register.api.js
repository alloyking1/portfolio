import httpClient from './httpClient';

/**
 * @function createAccount
 * @params user:{}
 * @description register the user
 *
 */

export async function createAccount(user_details) {
    const res = await httpClient.post('api/register',  user_details);
    return res;
}