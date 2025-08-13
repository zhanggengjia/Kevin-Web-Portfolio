import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: 'n20wr0e860i1',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});


export const useFetchProjects = (dataName) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: dataName });

      const projects = response.items.map((item) => {

        const { title, subtitle, url, image, images, github, text } = item.fields;
        const id = item.sys.id;
        // 處理單張圖或多張圖
        let imgList = [];

        if (image?.fields?.file?.url) {
          imgList = [image.fields.file.url];
        } else if (Array.isArray(images)) {
          imgList = images.map(img => img.fields?.file?.url).filter(Boolean);
        }

        return { title, subtitle, url, id, imgList, github, text }
      })

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);

    }
  }

  useEffect(() => {
    getData();
  }, [])

  return { loading, projects }
}
