
export const domain = 'http://reduxblog.herokuapp.com/api/';
export const endPoint = {
  post: 'posts?key=haya123'
};
export const getRoute = (route) => domain + endPoint[route];
