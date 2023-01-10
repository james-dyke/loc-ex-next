interface RadioButtonProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (params: any) => any;
}

export default function RadioButton({
  label,
  name,
  value,
  checked,
  onChange,
}: RadioButtonProps) {
  return (
    <label className="mr-2 cursor-pointer">
      <input
        className="cursor-pointer"
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="pl-2">{label}</span>
    </label>
  );
}
