import React from 'react';
import Card from '../../components/Card';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import CardBox from '../../components/CardBox';
import { getAPIClient } from '../../services/axios';
import { Box } from '@chakra-ui/react';

type CallsProps = {
  calls: Call[];
}

type Call = {
  id: number;
  priorityLevel: string;
  anydeskNumber: number;
  description: string;
  imageUrl: string;
  callStatus: boolean;
  userId: number;
  createdAt: Date;
  updatedAt: Date
}

export default function CallsList({ calls }: CallsProps) {
  return (
    <Card>
      <CardBox title="Chamados em aberto" buttonRedirect="/calls/create">
        {
          calls.map(call => {
            return (
              <Box key={call.id}>
                {call.description}
              </Box>
            )
          })
        }
      </CardBox>
    </Card>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ['pontodesk.token']: token } = parseCookies(context)
  const apiClient = await getAPIClient(context)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const { data } = await apiClient.get("/calls_all");
  const calls = data
  // const pagination = data.pagination.meta

  return {
    props: {
      calls
    }
  }
}