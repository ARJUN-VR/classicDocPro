import {gitHubApiService} from '../services/gitHubApiService.js'


const apiService = gitHubApiService()
export const gitHubController =()=> {
    const authurizeGithub = () => {
 
    }

    const fetchModifiedFiles =async() =>{
       const data = await apiService.fetchModifiedFiles()
    }

    const testController = () => {
        console.log("test controller...")
    }

    return {
        fetchModifiedFiles
    }


}