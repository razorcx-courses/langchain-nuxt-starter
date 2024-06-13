import { PdfReader } from "pdfreader";

const base64ToUint8Array = (base64) => {
  const binaryString = Buffer.from(base64, "base64").toString("binary");
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

const parsePdf = (arrayBuffer) => {
  let array = [];
  return new Promise((resolve, reject) => {
    new PdfReader().parseBuffer(arrayBuffer, (err, item) => {
      if (err) {
        console.error("error:", err);
        reject(err);
      } else if (item.text) {
        console.log(item.text, item.text.length);
        array.push(item.text);
        resolve(array);
      }
    });
  });
};

export default defineEventHandler(async (event) => {
  try {
    const { data } = await readBody(event);
    const base64String = data;
    const uint8Array = base64ToUint8Array(base64String);

    // Convert Uint8Array to ArrayBuffer
    const arrayBuffer = uint8Array.buffer;

    const response = await parsePdf(arrayBuffer);
    return response;
  } catch (error) {
    console.error("Failed to parse PDF:", error);
    return "Failed to parse PDF: " + error;
  }
});
