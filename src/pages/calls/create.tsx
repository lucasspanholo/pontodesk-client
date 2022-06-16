import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Select,
  SimpleGrid,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useMutation } from 'react-query';
import { Input } from "../../components/Form/Input";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Card from "../../components/Card";

type CreateCallFormData = {
  title: string;
  priority_level: string;
  anydesk_number: string;
  description: string;
  image_url: string;
  call_status: boolean;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string()
    .required("Senha obrigatória")
    .min(8, "No mínimo 8 caracteres"),
  password_confirmation: yup.string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateCall() {
  const router = useRouter();

  const bg = useColorModeValue('gray.50', 'gray.800');

  const createCall = useMutation(async (call: CreateCallFormData) => {
    const response = await api.post('calls', {
      call: {
        ...call,
      }
    })

    return response.data.call;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('calls')
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateCallForUser: SubmitHandler<CreateCallFormData> = async (values) => {
    await createCall.mutateAsync(values);

    router.push('/calls');
  }

  const { errors } = formState;

  return (
    <Card>
      <Box as="form"
        flex="1"
        borderRadius={8}
        bg={bg}
        p={["6", "8"]}
        onSubmit={handleSubmit(handleCreateCallForUser)}
      >
        <Heading size="lg" fontWeight="normal">
          Criar chamado
        </Heading>

        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input
              name="title"
              type="text"
              label="Titulo"
              error={errors.title}
              {...register("title")}
            />
            <Input
              name="anydesk_number"
              type="number"
              label="Número do anydesk"
              error={errors.anydesk_number}
              {...register("anydesk_number")}
            />

            <Select placeholder='Nível de prioridade'
              {...register("priority_level")}
            >
              <option value='Alta'>Alta</option>
              <option value='Médio'>Médio</option>
              <option value='Baixa'>Baixa</option>
            </Select>
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input
              name="title"
              type="text"
              label="Titulo"
              error={errors.title}
              {...register("title")}
            />
            <Input
              name="title"
              type="text"
              label="Titulo"
              error={errors.title}
              {...register("title")}
            />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Link href="/users">
              <Button as="a" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
          </HStack>
        </Flex>
      </Box>
    </Card>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ['pontodesk.token']: token } = parseCookies(context)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}