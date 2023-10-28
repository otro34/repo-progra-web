const Layout = ({ principal }) => {
    return (

        <main>
            <div>
                <TopBar />
            </div>
            <aside>
                <SideBar />
            </aside>
            <article>
                { principal }
            </article>
        </main>
        
    )
}