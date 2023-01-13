export const succesRes = (res, data) => {
  return res.json({
    status: 'success',
    data
  });
};
