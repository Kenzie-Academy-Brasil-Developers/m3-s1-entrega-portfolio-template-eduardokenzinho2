export const Technologies = ({ children, src }) => {
    return (
        <>
            <img src={src} alt="techicon" />
            {children}
        </>
    )
}