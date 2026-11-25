// rfce

interface MariaProps { 
    name: string;
    lastname: string;
}

function Maria({ name, lastname }: MariaProps) {

    return (
    <div>
    <h1>{name}</h1>
    <h2>{lastname}</h2>
    </div>
  )
}

export default Maria;