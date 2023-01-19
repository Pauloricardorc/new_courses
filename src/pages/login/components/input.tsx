import { InputHTMLAttributes, ReactNode } from "react";

interface IRootContainer {
  children: ReactNode;
}

function ContainerRoot({ children }: IRootContainer) {
  return (
    <div className="w-full h-9 border border-gray-200 rounded-md overflow-hidden flex first:mb-2">
      {children}
    </div>
  );
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function ContainerInput(props: InputProps) {
  return (
    <input
      type="text"
      className="w-full h-full px-2 outline-none placeholder:text-gray-500 text-sm"
      required
      {...props}
    />
  );
}

interface IInputIcons {
  children: ReactNode;
}

function ContainerIcon({ children }: IInputIcons) {
  return (
    <div className="w-10 flex items-center justify-center bg-slate-50">
      {children}
    </div>
  );
}

export const Input = {
  Root: ContainerRoot,
  Input: ContainerInput,
  Icon: ContainerIcon,
};
