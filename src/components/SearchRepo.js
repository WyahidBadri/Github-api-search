import React from 'react';

const Searchrepo = ({setInputValue, setGitLanguage}) => {
    return (
        <div >
      <form onSubmit={(e) => {
        e.preventDefault();
        setInputValue(e.target.elements.search.value)
        
        
      }}>
        <input className="search-repo-input" type="text" name="search" placeholder="Search by name" />
        
        
      </form>

      <form onSubmit={(e) =>{
        e.preventDefault();
        setGitLanguage(e.target.elements.language.value)
      }}> 
      <input className="search-repo-input" type="text" name="language" placeholder="Language: Enter only one" />
      </form>
      
      </div>
    );
}

export default Searchrepo;
