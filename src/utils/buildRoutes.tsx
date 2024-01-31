const pages = import.meta.glob("../pages/**/*.tsx", { eager: true });

type objectType = {
  path: string;
  Element: string;
  loader: string;
  action: string;
  ErrorBoundary: string;
}

const routes: any = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }
  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");
  
  const element: any = pages[path];
  const object: objectType = {
    path: fileName === "index" ? "/" : `${normalizedPathName.toLowerCase()}`,
    Element: element?.default,
    loader: element?.loader,
    action: element?.action,
    ErrorBoundary: element?.ErrorBoundary
  }
  routes.push(object);
}

export default routes;
