import { useEffect } from 'react';
const siteTitle = 'Repo Search';

const Page = (props) => {
  useEffect(() => {
    document.title = props.title
      ? `${props.title} - ${siteTitle}`
      : siteTitle;
  },[props.title]);

  return props.children;
}

export default Page;