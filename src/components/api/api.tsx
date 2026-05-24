import {useState, useEffect, createContext, useContext} from 'react';

    type ProjectImage = {
        main: string | null;
        mobile: string | null;
        screenshots: string | null;
        video: string | null;
    };

    type Project = {
        id: string;
        title: string;
        brief: string;
        desc: string;
        image:ProjectImage;
        languages:string[];
        github: string | null;
        site: string | null;

    };
    type ApiContextType = {
        projects: Project[];
        setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
    };

    const ApiContext = createContext<ApiContextType | null>(null);    

export function ApiProvider({ children }: { children: React.ReactNode }){
    
    //create all useState and functions here to be exported via API Provider 
    const [projects, setProjects] = useState<Project[]>([]);
    
    useEffect(() => {
        async function getProjects(){
            const response = await fetch('/projects/projects.json');
            const result = await response.json();
            //console.log(result.projects);
            setProjects(result.projects);
        }
        getProjects()
    }, []);
   

    return(
        <ApiContext.Provider
            value={{projects, setProjects }}
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    const context = useContext(ApiContext);

    if (!context) {
        throw new Error("useApi must be used within ApiProvider");
    }

    return context;
}