import User from './index';

const saveUser = user => User.create(user);

const getMyInfo = ({ id }) => User.where({ id }).fetch();
console.log(); //! FIX ME ^

export { getMyInfo, saveUser };
