export default async function CreateDirectories(root_directory, file_path) {
  const path = file_path.split('/');
  const file_name = path.pop();
  let dir = root_directory;
  for (const component of path) {
      dir = await dir.getDirectory(component, {create: true});
  }
  return [dir, file_name];
}