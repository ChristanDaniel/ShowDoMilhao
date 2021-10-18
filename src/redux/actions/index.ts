export const SEND_USER_INFO = 'SEND_USER_INFO';



export const sendUserInfo = (name: string, email: string) => ({
  type: SEND_USER_INFO, name, email
});
