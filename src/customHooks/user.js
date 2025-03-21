export const getUserDetail=(users,user_id)=>{
   return users.filter((item) => item.id === user_id);
} 