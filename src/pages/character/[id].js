import Hero from '@/components/Hero'
import api from '@/services/api'
import React from 'react'

export const config = {
  runtime: 'experimental-edge'
}

export default function Character ({ data }) {
  return (
    <div>
      {data?.id && <Hero image={data.image} name={data.name} />}
    </div>
  )
}

export async function getServerSideProps (context) {
  const { id = 1 } = context.params
  const data = await api.getOne(id)
  return {
    props: {
      data
    }
  }
}
