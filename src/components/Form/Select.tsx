import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  useColorModeValue,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
interface SelectProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const sectors = [
  {
    id: 1,
    name: 'Financeiro'
  },
  {
    id: 2,
    name: 'Recursos Humanos'
  },
  {
    id: 3,
    name: 'DEV'
  }
]

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, error = null, ...rest }, ref
) => {
  const bg = useColorModeValue('gray.100', 'gray.900')
  const focus = useColorModeValue('green.200', 'green.500')

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraSelect
        placeholder='Selecione um setor'
        name={name}
        id={name}
        focusBorderColor={focus}
        bgColor={bg}
        variant="filled"
        _hover={{
          bgColor: bg,
        }}
        size="lg"
        ref={ref}
        {...rest}
      >
        {sectors.map(sector => {
          return (
            <option key={sector.id} value={sector.name}>{sector.name}</option>
          )
        })}
      </ChakraSelect>

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}


    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
