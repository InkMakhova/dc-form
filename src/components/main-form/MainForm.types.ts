export type FormDataType = {
  name: string;
  size: number;
};

export type SubmitResult = FormDataType & { submittedAt: string };

export type FormState = {
  data: FormDataType;
  error: string | null;
};
