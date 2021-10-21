export const SEND_USER_INFO = 'SEND_USER_INFO';
export const SEND_OPTIONS_CATEGORY_INFO = 'SEND_OPTIONS_CATEGORY_INFO';



export const sendUserInfo = (name:string, email: string) => ({
  type: SEND_USER_INFO, name, email
});

export const sendOptionsCategory = ( id:string ) => ({
  type: SEND_OPTIONS_CATEGORY_INFO, id
});
