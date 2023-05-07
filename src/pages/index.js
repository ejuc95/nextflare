import Card from '@/components/Card'
import ContainerGallery from '@/components/ContainerGallery'
import PageButtons from '@/components/PageButtons'
import Search from '@/components/Search'
import api from '@/services/api'
import { useRouter } from 'next/router'

export default function Home ({ data }) {
  const router = useRouter()
  const queries = router.query

  const search = (value) => {
    router.push({
      query: {
        ...queries,
        name: value,
        page: 1
      }
    })
  }

  const pagination = (value) => {
    router.push({
      query: {
        ...queries,
        page: value
      }
    })
  }
  return (
    <div className='p-4 w-full flex flex-col justify-start gap-4'>
      <div className='w-full flex justify-center items-center'>
        <Search onChange={search} />
      </div>
      <div className='w-full flex justify-center items-center'>
        <PageButtons
          page={queries?.page || 1}
          total={data?.info?.pages || 1}
          setPage={pagination}
        />
      </div>
      <ContainerGallery>
        {data?.results && data.results.map(e =>
          <Card key={e.id} name={e.name} image={e.image} id={e.id} />
        )}
      </ContainerGallery>
    </div>
  )
}

export async function getServerSideProps (context) {
  const params = context.query
  const data = await api.getAll(params)
  return {
    props: {
      data
    }
  }
}
