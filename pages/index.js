import {Layout} from '../components/layout'
import Router from 'next/router'
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    Router.push('/order/list')
  }, [])
  return (
    <Layout>
    </Layout>
  )
}

