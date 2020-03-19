module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  if (members.length === 0) {
    throw Error;
  }

  let arr = [];

  for (let index in members) {
    if (typeof (members[index]) === 'string') {
      let temp = members[index].trim();
      arr.push(temp[0].toLocaleUpperCase());
    }
  }

  arr.sort();
  let str = arr.join('');

  return str;
};