//todo: check for file type is .pdf
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";

export const readPdfFile = async (files) => {
  // const files = file.value.files;

  //upload file to server
  const formData = new FormData();
  formData.append(
    "file",
    files[0],
    files[0].name.replaceAll(" ", "-").toLocaleLowerCase()
  );

  await $fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  console.log("Files", files);
  // Check if the user has selected a file
  if (files && files.length > 0) {
    console.log("Document loaded");
    // Access the file
    const blob = files[0];

    //https://github.com/mozilla/pdf.js/issues/17245
    const pdfjs = await import("pdfjs-dist/legacy/build/pdf.min.mjs");
    const pdfjsWorker = await import(
      "pdfjs-dist/legacy/build/pdf.worker.min.mjs"
    );
    pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    const pdfLoader = new WebPDFLoader(blob, {
      parsedItemSeparator: "",
      pdfjs: () => Promise.resolve(pdfjs),
    });

    // docs.value = await pdfLoader.load();

    return await pdfLoader.load();
    // console.log(docs.value);
  }
};
