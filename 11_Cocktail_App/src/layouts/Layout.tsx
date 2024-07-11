import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Fragment } from "react/jsx-runtime"
import CocktailRecipeModal from "../components/CocktailRecipeModal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"
import { Notification } from "../components/Notification"

export const Layout = () => {

    const { onInitFavourites } = useAppStore()

    useEffect(() => {
      onInitFavourites()
    }, [])
    
    return (
        <Fragment>
            <Header />
            
            <main className='container mx-auto py-16'>
                <Outlet />
            </main>

            <CocktailRecipeModal />
            <Notification />
        </Fragment>
    )
}
