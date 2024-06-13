import { PdfReader } from "pdfreader";
import { getBytes } from "firebase/storage";
import { ref as ref2 } from "firebase/storage";
import { storage } from "../lib/useFirestore";

const parsePdf = (arrayBuffer) => {
  let array = [];
  return new Promise((resolve, reject) => {
    new PdfReader().parseBuffer(arrayBuffer, (err, item) => {
      if (err) {
        console.error("error:", err);
        reject(err);
      } else if (item?.text) {
        array.push(item.text);
        resolve(array);
      }
    });
  });
};

export default defineEventHandler(async (event) => {
  try {
    const { path } = await readBody(event);
    console.log(path);

    const arrayBuffer = await getBytes(ref2(storage, path));
    console.log("Buffer length: ", arrayBuffer.byteLength);

    const response = await parsePdf(arrayBuffer);
    return response;

  } catch (error) {
    console.log(error);
  }
});
