type FormDataType = {
  [key: string]: string;
};

type FormChangeHandler<T extends FormDataType> = (
  event: React.ChangeEvent<HTMLInputElement>,
  formData: T,
  setFormData: React.Dispatch<React.SetStateAction<T>>,
) => void;

const formChangeHandler = <T>(
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  formData: T,
  setFormData: React.Dispatch<React.SetStateAction<T>>,
) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
  console.log(formData);
};

export default formChangeHandler;
