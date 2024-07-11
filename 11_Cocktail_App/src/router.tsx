import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { Layout } from "./layouts/Layout";

const FavouritesView = lazy(() => import('./views/FavouritesView'))

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/favourites" element={
                        <Suspense fallback="Cargando">
                            <FavouritesView />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
