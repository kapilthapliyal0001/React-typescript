import React, {useState} from "react";

interface FunctionalComponentProps {
    title: string
    subTitle?: string
  }

const FunctionalComponent = ({title, subTitle}: FunctionalComponentProps) => {
    const [name, setName] = useState<null | string>(null)

    return (
        <>
            <h1>Functional Component</h1>
            <p onClick={() => setName('Mike')}>{name}</p>
        </>
    )
}


export default FunctionalComponent;
