import { Button, Flex, Link, Stack, Text, toast, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form/Input";
import { api } from "../services/api";

interface SignUpProps {
  email: string;
  password: string;
  password_confirmation: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
  password_confirmation: 
  yup.string()
  .required('A confirmação da senha é obrigatória')
  .oneOf([yup.ref('password')], 'As senhas devem corresponder!'),
})

function SignUp({ }: SignUpProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;
  const toast = useToast();

  async function handleCreateUser(data) {
    const dataForm = data as SignUpProps;
    console.log('data', data)
    try {
      await api.post('/auth', dataForm).then((response) => {console.log('response', response)})
      toast({
        title: 'Conta cadastrada com sucesso!',
        position: 'top-right',
        status: 'success',
        isClosable: true,
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDirection="column">
      <Text
        fontSize={["3xl", "5xl"]}
        fontWeight="bold"
        marginBottom="5"
      >
        Pontodesk
        <Text as="span" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8" // medida chakra
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleCreateUser)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />

          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />

          <Input
            name="password_confirmation"
            type="password"
            label="Confirme sua senha"
            error={errors.password_confirmation}
            {...register("password_confirmation")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Cadastrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default SignUp;