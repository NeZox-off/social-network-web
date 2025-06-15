interface AuthFormHeadProps {
	title: string
	description: string
}

export const AuthFormHea = ({ title, description }: AuthFormHeadProps) => {
	return (
		<div className="form-head">
			<h2 className="form-title">{title}</h2>
			<p className="form-description">{description}</p>
		</div>
	)
}
