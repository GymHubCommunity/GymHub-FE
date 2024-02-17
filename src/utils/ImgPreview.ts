import { ChangeEvent, Dispatch, SetStateAction } from 'react';

function handlePreviewFile(
  e: ChangeEvent<HTMLInputElement>,
  onImageChange: (image: string) => void,
  setFile: Dispatch<SetStateAction<File | null>>,
) {
  if (!e.target.files) return;
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = (e: ProgressEvent<FileReader>) => {
    if (reader.readyState === 2) {
      onImageChange(e.target?.result as string);
    }
  };
  e.target.value = '';
  setFile(file);
}

export default handlePreviewFile;
