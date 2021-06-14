function infiniLoad(promise, payload) {
  const pageLimit = 10;
  let page = 0;
  return async function next() {
    const data = await promise({ ...payload, page });
    const { total, ...rest } = data;
    if (page < Math.floor(total / pageLimit)) {
      return [
        rest,
        () => {
          page++;
          return next();
        }
      ];
    }
    return [rest, undefined];
  };
}

export default infiniLoad;
