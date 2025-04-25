import {gitHubApiService} from '../services/gitHubApiService.js'


const apiService = gitHubApiService()
export const gitHubController =()=> {
    const authurizeGithub = () => {
 
    }

    const fetchModifiedFiles = async(pullUrl) =>{

        const match = pullUrl.match(/github\.com\/([^\/]+)\/([^\/]+)\/pull\/(\d+)/);

        if (!match) {
            console.error("Invalid Pull Request URL");
            return;
        }
    
        const [, owner, repo, pullNumber] = match; // Destructure values

        console.log(owner, repo, pullNumber)

        const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`;

        const response = await fetch(url, {
            headers: { Accept: "application/vnd.github.v3+json" }
          });

          const data = await response.json();
          console.log("sample data:", data)
    }

    const testController = () => {
        console.log("test controller...")
    }

    return {
        fetchModifiedFiles
    }


}