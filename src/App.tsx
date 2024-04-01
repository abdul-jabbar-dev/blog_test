import { useEffect, useRef } from "react";
import Blogs from "./Blogs";

export default function App() {
  const useFile = useRef();

  useEffect(() => {
    if (useFile.current) {
      useFile.current.focus();
    }
  }, []);
  const handleChange = () => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(useFile.current.files[0]);
    fileReader.onload = async (event: ProgressEvent<FileReader>) => {
      if (event && event.target) {
        const content = event.target.result!;
        const CHUNK_SIZE = 10000;

        const totalChunks = event.target.result.byteLength / CHUNK_SIZE;

        const fileName =
          Math.random().toString(36).slice(-6) +
          "_" +
          useFile.current.files[0].name;

        for (let chunk = 0; chunk < totalChunks + 1; chunk++) {
          const CHUNK = content.slice(
            chunk * CHUNK_SIZE,
            (chunk + 1) * CHUNK_SIZE
          );
          await fetch('http://localhost:4000/upload?fileName=' + fileName, {
            'method': 'POST',
            'headers': {
              'content-type': "application/octet-stream",
              'content-length': CHUNK.length,
            },
            'body': CHUNK
          })
        }
      }
    };
  };

  return (
    <div className="App">
      {/* <Blogs></Blogs> */}
      <input type="file" ref={useFile} onChange={handleChange} />
    </div>
  );
}
