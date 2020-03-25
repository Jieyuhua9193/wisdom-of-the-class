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
  comp('list', 'list', 'student-list', defaultMeta),
  comp('messaging', 'messaging', 'student-messaging', defaultMeta),
  comp('import', 'bulkImport', 'student-import', defaultMeta),
]
