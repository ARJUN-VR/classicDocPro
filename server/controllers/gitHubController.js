import {gitHubApiService} from '../services/gitHubApiService.js'
import { openAiApiService } from '../services/openAiAPiService.js'


const apiService = gitHubApiService()

const service = openAiApiService();

export const gitHubController =()=> {

    const fetchModifiedFiles = async(req, res) =>{
        console.log("fetchModifiedFiles")

        const pullUrl = req.body.pullUrl

        console.log("pullUrl: ", pullUrl)

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
          const patch = data[0].patch
          return  extractAddedLines(patch)

          
    }
    const extractAddedLines = (patch) => {
        return patch
            .split("\n") // Split patch into lines
            .filter(line => line.startsWith("+") && !line.startsWith("++")) // Keep only lines that start with "+"
            .map(line => line.substring(1).trim()); // Remove the "+" sign and trim spaces
    };

    const generateDocument = (req, res) => {
        const res =  service.makeRequest(req.changeFiles)
        res.json({response: res})
    }


    return {
        fetchModifiedFiles
    }


}