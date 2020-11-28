import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import glob from 'glob';

const contentsDirectory = path.join(process.cwd(), 'contents');

const getFileNamesForDirectory = directory => fs.readdirSync(
  `${contentsDirectory}/${directory}`
);

export const getMarkdown = filePathInsideContents => {
  const fileContent = fs.readFileSync(
    `${contentsDirectory}/${filePathInsideContents}`,
    'utf8'
  );
  const { data, content } = matter(fileContent);
  return { metadata: data, content };
};

export const getMarkdownMeta = filePathInsideContents => {
  const fileContent = fs.readFileSync(
    `${contentsDirectory}/${filePathInsideContents}`,
    'utf8'
  );
  const returned = matter(fileContent);
  return returned.data;
};

export const getAllMarkdownMetaFromDirectory = directoryPathInsideContents => {
  const filenames = getFileNamesForDirectory(directoryPathInsideContents);

  return filenames.map(filename => {
    const filecontent = getMarkdownMeta(
      `${directoryPathInsideContents}/${filename}`
    );
    return { ...filecontent, link: `/${directoryPathInsideContents}/${filecontent.slug}`};
  });
};

export const getPathsFor = directory => {
  const filenames = glob.sync(`${contentsDirectory}/${directory}/**/*.md`);

  const withoutExt = filenames.map((file, index, array) => {
    const splited = file.split('/');
    return splited[splited.length - 1].replace(/ /g, '-').slice(0, -3).trim()
  });

  return withoutExt.map(slug => `/${directory}/${slug}`);
}