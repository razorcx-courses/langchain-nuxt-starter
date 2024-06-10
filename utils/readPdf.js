//todo: check for file type is .pdf
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";

export const readPdfFile = async (files) => {
  if (!files || files.length === 0) return;

  const file = files[0];

  //upload file to server
  const formData = new FormData();
  formData.append(
    "file",
    file,
    file.name.replaceAll(" ", "-").toLocaleLowerCase()
  );
  // Check if the user has selected a file
  console.log("Document loaded");

  //https://github.com/mozilla/pdf.js/issues/17245
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.min.mjs");
  const pdfjsWorker = await import(
    "pdfjs-dist/legacy/build/pdf.worker.min.mjs"
  );
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  const pdfLoader = new WebPDFLoader(file, {
    parsedItemSeparator: "",
    pdfjs: () => Promise.resolve(pdfjs),
  });

  return await pdfLoader.load();
};
