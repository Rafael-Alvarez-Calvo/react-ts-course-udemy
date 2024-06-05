import { PropsWithChildren, ReactNode } from "react"

type TErrorMessageProps = {
    children: ReactNode
}

export const ErrorMessage = ({ children }: TErrorMessageProps) => {

    return (
        <p className="bg-red-600 text-white text-sm font-bold text-center mt-3 p-2">{children}</p>
    )
}


//En este caso cuando recibimos un children  podemos crear un type y tipar children con ReactNode pero tambien podemos usar PropsWithChildren

// Use React.PropsWithChildren when:

// Your component is designed to explicitly handle and render child elements.
// You want to enforce that the component should receive and work with children.
// You need to define additional custom props along with the children prop.
// You are using TypeScript and want to ensure proper typing for the children prop.

// Use React.ReactNode when:

// Your component can receive a variety of different types of children, and you want to allow more flexibility in what can be passed to the component.
// You don’t specifically need to enforce or interact with the children within the component.
// You want a more generic approach that doesn’t include any additional custom props.
