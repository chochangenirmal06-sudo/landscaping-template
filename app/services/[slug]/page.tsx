import { redirect } from 'next/navigation'
import { clientConfig } from '@/lib/client.config'

export async function generateStaticParams() {
  return clientConfig.services.filter(s => s.active).map(s => ({ slug: s.slug }))
}

export default function ServicePage() {
  redirect('/contact')
}
