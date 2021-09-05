import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';



// 

const repository = {
    name: 'unform',
    description: "Forms in React",
    link: "http://github.com/unform/unform"
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]) // Sempre comecamos o estado com utilizando uma variavel do tipo que pretendemos armazenar. Como no caso aqui queremos uma lista, comecamos com um array vazio.

    useEffect(() => {
        fetch('https://api.github.com/users/raphael-gc/repos') // Chamada para API para pegar os dados dos repositorios.
            .then(response => response.json()) // Pega a resposta da chamada e transforma em JSON.
            .then(data => setRepositories(data))

    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}