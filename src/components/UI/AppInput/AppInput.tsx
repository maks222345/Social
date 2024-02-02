interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError: boolean;
  errorText: string;
}

export const AppInput = ({
  hasError,
  errorText,
  type,
  required,
  placeholder,
  ...props
}: AppInputProps) => {
  return (
    <>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        {...props}
      />
      {hasError && <span>{errorText}</span>}
    </>
  );
};
