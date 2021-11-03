import React, {useState, useEffect} from 'react';
import Repodetail from './components/RepoDetail';
import Searchrepo from './components/SearchRepo';



function App() {
  const [inputValue, setInputValue] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [gitLanguage, setGitLanguage] = useState('');

  
  
  
  
  useEffect(() => {
    if(!inputValue){
      return;
    }
    fetch('https://api.github.com/search/repositories?q=' + inputValue + '+language:' + gitLanguage )
    .then(response => response.json())
    .then(data => setRepositories(data.items));
  },[inputValue, gitLanguage])
  

  return (
    <div>
    <Searchrepo setInputValue={setInputValue} setGitLanguage={setGitLanguage} />
      <button onClick={() => setIsSorted(!isSorted)} >SORT BY STARS </button>
      {isSorted  ? <Repodetail repositories={repositories.sort((a,b) => b.stargazers_count > a.stargazers_count ? 1 : -1)} /> : <Repodetail repositories={repositories} />}
      
    </div>
  );
}

export default App;
