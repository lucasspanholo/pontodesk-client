import React from 'react';
import Card from '../../components/Card';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import CardBox from '../../components/CardBox';
import { getAPIClient } from '../../services/axios';

export default function CallsList({ calls }) {
  return (
    <Card>
      <CardBox title="Chamados em aberto" buttonRedirect="/calls/create">
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

  console.log(data)

  const calls = data.calls
  // const pagination = data.pagination.meta

  return {
    props: {
      // calls
    }
  }
}