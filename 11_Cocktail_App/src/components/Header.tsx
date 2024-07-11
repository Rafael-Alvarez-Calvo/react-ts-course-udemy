import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SearchCocktailkForm } from "./SearchCocktailForm";

export const Header = () => {

    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === '/', [pathname]);

    return (
        <header className={ isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800' }>
            <div className="mx-auto container py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>

                    <nav className='flex gap-6'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 uppercase font-bold border-b-2 border-orange-500' : 'text-white uppercase font-bold'
                            }>Inicio</NavLink>
                        <NavLink
                            to="/favourites"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }>Favoritos</NavLink>
                    </nav>
                </div>

                { isHome && <SearchCocktailkForm /> }
            </div>
        </header>
    )
}
