import { useQuery } from "@tanstack/react-query";

const url =
  "https://api.unsplash.com/search/photos?client_id=7Q4EfAl_GiXIFPtDzRyW1_v_QuNpjWiPGPHi9Qa3DKY&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });

  return <div>Gallery</div>;
};

export default Gallery;
