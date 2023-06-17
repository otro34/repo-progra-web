import NextLink from 'next/link';

const Link = ({href, text}) => {
    return (
        <NextLink href={href}>{text}</NextLink>
    )
}

export default Link