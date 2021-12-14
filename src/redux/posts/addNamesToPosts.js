export const addNamesToPosts = (users, postUserId) => {
    const length = users.length;
    for (let i = 0; i < length; i++) {
        if (users[i].userId === postUserId) {
            return users[i].nickname;
        }
    }
};
