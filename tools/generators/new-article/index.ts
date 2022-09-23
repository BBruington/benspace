// tools/generators/new-article/index.ts
import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (host: Tree, schema: NewArticleSchemaOptions) {
  await libraryGenerator(host, { name: schema.title });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}