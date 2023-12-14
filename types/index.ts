export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
  message?: string;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreButtonProps {
  pageNumber: number;
  isNext: boolean;
}
