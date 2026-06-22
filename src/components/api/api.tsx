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
        challenge: string;
        solution: string;
        image:ProjectImage;
        languages:string[];
        github: string | null;
        site: string | null;

    };

    type SimulationImage = {
        main: string | null;
        mobile: string | null;
        screenshots: string | null;
        video: string | null;
    };

    type Simulation = {
        id: string;
        title: string;
        brief: string;
        desc: string;
        challenge: string;
        solution: string;
        result: string;
        image:SimulationImage;
        languages:string[];
        github: string | null;
        site: string | null;
        real: string | null;
    };

    type ApiContextType = {
        projects: Project[];
        setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
        simulations: Simulation[];
        setSimulations: React.Dispatch<React.SetStateAction<Simulation[]>>;
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

    const [simulations, setSimulations] = useState<Simulation[]>([]);
    useEffect(() => {
        async function getSimulations(){
            const response = await fetch('/projects/simulations.json');
            const result = await response.json();
            //console.log(result.simulations);
            setSimulations(result.simulations)
        }
        getSimulations()
    }, [])
   

    return(
        <ApiContext.Provider
            value={{projects, setProjects, simulations, setSimulations }}
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