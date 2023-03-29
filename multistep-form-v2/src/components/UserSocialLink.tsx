import { Form } from 'react-bootstrap'

export interface UserSocialLinkProps {
	facebookLink: string
	twitterLink: string
	linkedInLink: string
}

interface Props extends UserSocialLinkProps {
	onChangeHandler: (data: Partial<UserSocialLinkProps>) => void
}

const UserSocialLink = ({ facebookLink, twitterLink, linkedInLink, onChangeHandler }: Props) => {
	return (
		<>
			<Form.Group className='mb-3' controlId='formfacebook'>
				<Form.Label>Face Book</Form.Label>
				<Form.Control
					type='text'
					placeholder='Face Book URL'
					value={facebookLink}
					onChange={(e) => onChangeHandler({ facebookLink: e.target.value })}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formTwitter'>
				<Form.Label>Twitter</Form.Label>
				<Form.Control
					type='text'
					placeholder='Twitter URL'
					value={twitterLink}
					onChange={(e) => onChangeHandler({ twitterLink: e.target.value })}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formLinkedin'>
				<Form.Label>LinkedIn</Form.Label>
				<Form.Control
					type='text'
					placeholder='LinkedIn URL'
					value={linkedInLink}
					onChange={(e) => onChangeHandler({ linkedInLink: e.target.value })}
				/>
			</Form.Group>
		</>
	)
}

export default UserSocialLink
