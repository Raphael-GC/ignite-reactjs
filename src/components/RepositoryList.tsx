import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() { // Passamos um tipo pra um estado usando os <>. No exemplo abaixo, como era um array usamos [] ao lado do nome da interface.
    const [repositories, setRepositories] = useState<Repository[]>([]) // Sempre comecamos o estado com utilizando uma variavel do tipo que pretendemos armazenar. Como no caso aqui queremos uma lista, comecamos com um array vazio.

    useEffect(() => {
        fetch('https://api.github.com/users/raphael-gc/repos') // Chamada para API para pegar os dados dos repositorios.
            .then(response => response.json()) // Pega a resposta da chamada e transforma em JSON.
            .then(data => setRepositories(data))

    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })} // Nesse caso nao usamos o .forEach pois ele nao retornaria nada, e queremos que para cada repo seja retornado um RepositoryItem, por isso usamos .map
            </ul>
        </section>
    )
}