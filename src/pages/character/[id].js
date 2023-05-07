import Hero from '@/components/Hero'
import api from '@/services/api'

export default function Character ({ data }) {
  return (
    <div>
      {data?.id && <Hero image={data.image} name={data.name} />}
    </div>
  )
}

export async function getServerSideProps (context) {
  const { id = 1 } = context.params
  try {
    const data = await api.getOne(id)
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.error('Ocurrió un error al obtener los datos:', error)
    return {
      props: {
        data: null
      }
    }
  }
}
