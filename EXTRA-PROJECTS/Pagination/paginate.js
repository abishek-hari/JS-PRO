const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newFollwers = Array.from({ length: numberOfPages }, (_, index) => {
    console.log(index);
    const start = index * itemsPerPage;
    console.log(start);
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollwers;
};

export default paginate;
