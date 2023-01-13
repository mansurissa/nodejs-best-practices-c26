import { succesRes } from '../helper/succesResponse';

export const createPost = (req, res) => {
  res.send('Create post endposint');
};

export const getAllPosts = (req, res) => {
  succesRes(res, {
    post: { id: 1, title: 'A blog post', body: 'Some useful content' }
  });
};
