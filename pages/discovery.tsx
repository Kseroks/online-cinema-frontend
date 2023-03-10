import { GetStaticProps, NextPage } from 'next'

import Collection, { ICollection } from '@/screens/collections/Collection'

import { GenresService } from '@/services/genres/genres.service'

import Error404 from './404'

const DiscoveryPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return collections ? (
		<Collection collections={collections || []} />
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenresService.getCollections()
		return {
			props: { collections },
			revalidate: 30,
		}
	} catch (e) {
		return {
			props: {},
			notFound: true,
		}
	}
}

export default DiscoveryPage
