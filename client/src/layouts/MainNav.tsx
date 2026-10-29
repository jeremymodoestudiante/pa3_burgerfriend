import { Link, useLocation } from "react-router";

interface NavItemI {
    id: string;
    title: string;
    path: string;
};

const NavItem: NavItemI[] = [
    {
        id: "inicio",
        title: "Inicio",
        path: "/"
    },
    {
        id: "item",
        title: "Item",
        path: "/itemcrud"
    },
    {
        id: "carta",
        title: "Carta",
        path: "/carta"
    },
    {
        id: "locales",
        title: "Locales",
        path: "/locales"
    },
    {
        id: "franquicia",
        title: "Franquicia",
        path: "/franquicia"
    }
];

export const MainNav = () => {

    const location = useLocation();

    return (
        <nav className="w-[50%] flex items-center">
            <ul className="hidden lg:flex flex-row w-full justify-around items-center">
                
                {NavItem.map(navItem => (
                    
                        <li key={navItem.id} className="font-primary text-lg text-primary">
                            <Link to={navItem.path} 
                            className={`rounded-xl py-3 px-4 hover:bg-primary/10  transition-all duration-600 ease-out ${location.pathname == navItem.path ? "bg-primary/10" : "bg-transparent"}`}>
                            {navItem.title}
                            </Link>
                        </li>

                ))}                
                
            </ul>
        </nav>
    )
};