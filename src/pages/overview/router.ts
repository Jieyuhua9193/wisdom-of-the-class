const comp = (path: string, fName: string, name: string, meta: object) => {
  return {
    path,
    name,
    meta,
    component: () => import(/* webpackChunkName: "user" */`./views/${fName}.vue`)
  };
};

const defaultMeta = {
  auth: true
};

export default [
  comp('overview', 'index', 'overview', { auth: false }),
]
