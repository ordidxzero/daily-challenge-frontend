export const generateID = () => {
  const random_1 = Math.random().toString(36).slice(2);
  const random_2 = Math.random().toString(36).slice(2);
  const specials = '!$%^&*()_+|~-=`{}[]:;<>?,./';
  const random_3 = specials[Math.floor(Math.random() * (specials.length - 1))];
  return `${random_1}${random_3}${random_2}`;
};
