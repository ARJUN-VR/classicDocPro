import { GoogleGenerativeAI } from "@google/generative-ai"


export const openAiApiService =() => {
    const apiKey = "AIzaSyD4rO0Htxk0WuB89dxmgt8IcQiDyzeGVJ0"
    
    const getDocumentPoints =() =>{

    }

    const makeRequest = async(file) => {
        const url= `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

        const requestBody = {
            contents: [
                { 
                    parts: [{ text:"analyze this code and give bullet points to create flowchart :" + file }] // Assuming "file" contains the modified files text
                }
            ] 
        };
    
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        
        const prompt = `
        Analyze this code file and return the flowchart structure for React flow edge and vertex format. 
        Ensure the output follows syntax for a flowchart and does not include any extra text or summarization. 
        The flowchart should be formatted as follows:

        res data:
        {
            edges: [
                { id: "e1", source: "node1", target: "node2" },
                { id: "e2", source: "node2", target: "node3" },
                { id: "e3", source: "node3", target: "node4" },
                { id: "e4", source: "node4", target: "node5" },
                { id: "e5", source: "node5", target: "node6" }].
            vertices: [
                { id: "node1", label: "Node 1" },
                { id: "node2", label: "Node 2" },
                { id: "node3", label: "Node 3" },
                { id: "node4", label: "Node 4" },
                { id: "node5", label: "Node 5" },
                { id: "node6", label: "Node 6" }
            ], 
            summary: "This is a summary of the flowchart.like what it does it must be short and precise"
    }
        
        Code:
        ${file}
        `;
        
        const result = await model.generateContent(prompt);
        console.log(result)
        console.log(result.response.text());
        return result.response.text();
    }

    return {
        getDocumentPoints,
        makeRequest
    }
}