const logGroup = (content, title) => {
  console.group(title);
  console.log(content);
  console.groupEnd();
}

export default logGroup;