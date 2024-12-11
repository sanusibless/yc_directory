

export default function Layout({ children } : { children : React.ReactNode }) {
    return (
        <div>
            <h1 className="tex-3xl">Dashboard Nav Bar</h1>
            {children}
        </div>
    )
}