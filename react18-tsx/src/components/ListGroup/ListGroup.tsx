import { useState } from 'react'
import styles from './ListGroup.module.css'
import styled from 'styled-components'
import { User } from '../../App'

interface ListItemProps {
	active: boolean
}

const List = styled.li<ListItemProps>`
	padding: 0.25rem 0.75rem;
	margin: 0.25rem;
	border: solid 1px;
	user-select: none;
	background-color: ${(props) => (props.active ? 'azure' : 'initial')};
`

interface Props {
	items: User[]
	heading: string
	onSelectItem: (item: User) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	const [selectedId, setSelectedId] = useState(-1)

	return (
		<div className='m-2'>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className={[styles.listGroup, styles.listBackground].join(' ')}>
				{items.map((item, index) => (
					<List
						active={selectedId === item.id}
						key={index}
						onClick={() => {
							setSelectedId(item.id)
							onSelectItem(item)
						}}>
						{item.name}
					</List>
				))}
			</ul>
		</div>
	)
}

export default ListGroup
