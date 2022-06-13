import React from 'react';
import Card from '../../components/Card';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import CardBox from '../../components/CardBox';
import { getAPIClient } from '../../services/axios';
import { Box, Text } from '@chakra-ui/react';

type CallsProps = {
  calls: Call[];
}

type Call = {
  id: number;
  priority_level: string;
  anydesk_number: number;
  description: string;
  call_status: boolean;
  created_at: Date;
  image_url: string;
  review: Review[];
}

type Review = {

}

export default function CallsList({ calls }: CallsProps) {
  console.log(calls);
  return (
    <Card>
      <CardBox title="Chamados em aberto" buttonRedirect="/calls/create">
        <>
          {
            calls.map((call) => {
              return (
                <Box key={call.id}>
                  <Text>
                    {call.priority_level}
                  </Text>
                  <Text>
                    {call.anydesk_number}
                  </Text>
                  <Text>
                    {call.description}
                  </Text>
                  <Text>
                    {call.created_at}
                  </Text>
                  <Text>
                    {call.image_url}
                  </Text>
                  <Text>
                    {call.call_status}
                  </Text>
                  <Text>
                    {call.review}
                  </Text>
                </Box>
              )
            })
          }
        </>
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