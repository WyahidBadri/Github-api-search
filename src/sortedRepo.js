import React from 'react';

const Sortedrepo = ({repositories}) => {
    return (
        <div>
         <ul className="repo-ul">
      {repositories.map(repo => {
        return <li key={repo.id} className="repo-list">
        <a href={repo.html_url} target="_blank">{repo.name}</a> 
        <p>{repo.description}</p>
        <p>Stars: {repo.stargazers_count}</p>
        <p>Language: {repo.language}</p>
        </li>
      })}
      </ul>
        </div>
    );
}

export default Sortedrepo;
